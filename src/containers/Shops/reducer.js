import { GET_SHOPS_SUCCESS, FETCH_GET_SHOPS, GET_AUTOCOMPLETE_SUCCESS, ADD_SHOP_SUCCESS, FETCH_ADD_SHOP, BLOCK_SHOP_FAILED, BLOCK_SHOP } from "./constants";
import { BLOCK_PROMO } from "../Promos/constants";

const initialState = {
  data: [],
  sync: false,
  error: false,
  predictions: [],
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_SHOPS:
      return {
        ...state,
        sync: true
      };
    case GET_SHOPS_SUCCESS:
      return {
        ...state,
        data: action.shops,
        sync: false,
        error: false,
      };
    case GET_AUTOCOMPLETE_SUCCESS:
      const { predictions } = action
      return {
        ...state,
        predictions
      };
      case ADD_SHOP_SUCCESS:
      return {
        ...state,
        sync: false,
        error: false
      };
      case FETCH_ADD_SHOP:
      return {
        ...state,
        sync: true,
        error: false
      };
      case BLOCK_SHOP_FAILED:
			const tempFailed = state.data.filter(item => {
				if (item.id === id) {
					item.active = active
				}
				return item
      })
      return {
				...state,
				data: tempFailed,
				sync: false,
				error: true,
      };
      
      case BLOCK_SHOP:

			const { id, active } = action.values
			const temp = state.data.filter(item => {
				if (item.id === id) {
					item.active = !active
				}
				return item
			})
			return {
				...state,
				data: temp,
				sync: false,
				error: false,
			};



    default:
      return state;
  }
}
