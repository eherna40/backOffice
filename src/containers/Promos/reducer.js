import { FETCH_GET_PROMOS, GET_PROMOS_SUCCESS, FETCH_ADD_PROMO, ADD_PROMO_SUCCESS, ADD_PROMO_FAILED, BLOCK_PROMO, BLOCK_PROMO_FAILED } from "./constants";

const initialState = {
	data: [],
	sync: false,
	error: false,
};

export default function promosReducer(state = initialState, action) {
	switch (action.type) {
		case FETCH_GET_PROMOS:
			return {
				...state,
				sync: true,
				error: false,
			};
		case GET_PROMOS_SUCCESS:
			const { promos } = action
			return {
				...state,
				data: promos,
				sync: false,
				error: false,
			};
		case FETCH_ADD_PROMO:
			return {
				...state,
				sync: true,
				error: false,
			};
		case ADD_PROMO_SUCCESS:
			return {
				...state,
				sync: false,
				error: false,
			};
		case ADD_PROMO_FAILED:
			return {
				...state,
				sync: false,
				error: true,
			};
		case BLOCK_PROMO:

			const { id, active } = action.values
			const temp = state.data.filter(promo => {
				if (promo.id === id) {
					promo.active = !active
				}
				return promo
			})
			return {
				...state,
				data: temp,
				sync: false,
				error: true,
			};


			case BLOCK_PROMO_FAILED:
			const tempFailed = state.data.filter(promo => {
				if (promo.id === id) {
					promo.active = active
				}
				return promo
			})
			return {
				...state,
				data: tempFailed,
				sync: false,
				error: true,
			};
			
		default:
			return state;
	}
}
