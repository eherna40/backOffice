import { FETCH_LOGIN, LOGIN_SUCCES, LOGOUT } from "./constants";

const initialState = { 
  user: {},
  sync: false,
  error: false,
  isLogged: false
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_LOGIN:
      return {
        ...state,
        sync: true,
        error: false
      };
      case LOGIN_SUCCES:
      const { user } = action

      return {
        ...state,
        user,
        sync: false,
        error: false,
        isLogged: true
      };
      case FETCH_LOGIN:
      return {
        ...state,
        sync: false,
        error: true,
        isLogged: false
      };
      case LOGOUT:
      return {
        ...state,
        sync: false,
        error: false,
        user: {},
        isLogged: false
      };
    default:
      return state;
  }
}
