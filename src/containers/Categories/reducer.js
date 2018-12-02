import { GET_CATEGORIES_SUCCESS } from "./constants";

const initialState = {
	data: [],
	sync: false,
	error: false,
};

export default function catsReducer(state = initialState, action) {
	switch (action.type) {
		case GET_CATEGORIES_SUCCESS:
		const {cats } = action
			return {
				...state,
				data: cats,
				sync: true,
				error: false,
			};

		default:
			return state;
	}
}
