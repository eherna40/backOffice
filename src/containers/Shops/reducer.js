import { GET_SHOPS_SUCCESS, FETCH_GET_SHOPS, GET_AUTOCOMPLETE_SUCCESS, ADD_SHOP_SUCCESS, FETCH_ADD_SHOP, BLOCK_SHOP_FAILED, BLOCK_SHOP, FETCH_ONLY_SHOP, GET_ONLY_SHOP_SUCCES, FETCH_EDIT_SHOP, EDIT_SHOP_SUCCESS, EDIT_SHOP_ERROR } from "./constants";

const initialState = {
  data: [],
  sync: false,
  error: false,
  predictions: [],
  selected: {},
  updated: false
};

export default function shopReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_SHOPS:
      return {
        ...state,
        sync: true,
        updated: false

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
      case FETCH_ONLY_SHOP:
      return {
        ...state,
        sync: true,
        error: false
      };
      case GET_ONLY_SHOP_SUCCES:
      const { selected } = action
      return {
        ...state,
        selected,
        sync: false,
        error: false
      };

      case FETCH_EDIT_SHOP:
      return {
        ...state,
        sync: true,
        error: false,
        updated: false

      };

      case EDIT_SHOP_SUCCESS:
      const { valuesforSet } = action
      return {
        ...state,
        selected: valuesforSet,
        sync: false,
        error: false,
        updated: true

      };

      case EDIT_SHOP_ERROR:
      return {
        ...state,
        sync: false,
        error: true,
        updated: false

      };




    default:
      return state;
  }
}
