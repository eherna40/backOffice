import { combineReducers } from 'redux';
import shopReducer from '../containers/Shops/reducer'
import loginReducer from '../containers/Login/reducer'

export default combineReducers({
  shopReducer,
  loginReducer
  
});
