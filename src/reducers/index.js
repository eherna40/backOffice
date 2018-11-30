import { combineReducers } from 'redux';
import homereducer from '../containers/Home/reducer'
import shopReducer from '../containers/Shops/reducer'

export default combineReducers({
  homereducer,
  shopReducer,
  
});
