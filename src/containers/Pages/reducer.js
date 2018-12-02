import { FETCH_GET_PAGES, SET_PAGES_SUCCESS, SET_PAGES_FAILED, GET_PAGES_SUCCESS, FETCH_SET_PAGES } from "./constants";

const initialState = {
  data: [],
  sync: false,
  error: false,
};

export default function pagesReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_PAGES:
      return {
        ...state,
        sync: true,
        error: false,
      };
      case FETCH_SET_PAGES:
      return {
        ...state,
        sync: true,
        error: false,
      };
      case GET_PAGES_SUCCESS:
      const { pages } = action
      return {
        ...state,
        data: pages,
        sync: false,
        error: false,
      };
      case SET_PAGES_FAILED:
      return {
        ...state,
        sync: false,
        error: true,
      };
    default:
      return state;
  }
}
