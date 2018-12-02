import { combineReducers } from 'redux';
import shopReducer from '../containers/Shops/reducer'
import loginReducer from '../containers/Login/reducer'
import usersReducer from '../containers/Users/reducer'
import pagesReducer from '../containers/Pages/reducer'
import promosReducer from '../containers/Promos/reducer'
import catsReducer from '../containers/Categories/reducer'

export default combineReducers({
  shopReducer,
  loginReducer,
  usersReducer,
  pagesReducer,
  promosReducer,
  catsReducer
});
