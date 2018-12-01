import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web and AsyncStorage for react-native


import rootReducer from './reducers';
import sagas from './sagas';
import shopReducer from './containers/Shops/reducer';


const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['loginReducer']
}


export const history = createHistory();

const sagaMiddleware = createSagaMiddleware();

const initialState = {};
const enhancers = [];
const middleware = [
  routerMiddleware(history),
  sagaMiddleware
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = composeWithDevTools(
  applyMiddleware(...middleware),

);


const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(
  connectRouter(history)(persistedReducer),
  initialState,
  composedEnhancers
);

let persistor = persistStore(store)

sagaMiddleware.run(sagas);

export  {store, persistor};
