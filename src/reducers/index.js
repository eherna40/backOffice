import { combineReducers } from 'redux';
import shopReducer from '../containers/Shops/reducer'
import loginReducer from '../containers/Login/reducer'
import usersReducer from '../containers/Users/reducer'

export default combineReducers({
  shopReducer,
  loginReducer,
  usersReducer
  
});
