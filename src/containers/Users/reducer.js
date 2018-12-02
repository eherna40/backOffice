import { GET_USER_SUCCESS, GET_USER_FAILED, FETCH_GET_USER, GET_ONLY_USER_SUCCESS, FETCH_GET_ONLY_USER, FETCH_BLOCK_USER, BLOCK_USER_FAILED } from "./constants";

const initialState = {
  data: [],
  sync: false,
  error: false,
  selected: {}
};

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_GET_USER:
      return {
        ...state,
        sync: true,
        error: false,
      };
    case GET_USER_SUCCESS:
      return {
        ...state,
        data: action.users,
        sync: false,
        error: false,
      };
    case GET_USER_FAILED:
      return {
        ...state,
        sync: false,
        error: true,
      };
      case FETCH_GET_ONLY_USER:
      return {
        ...state,
        sync: true,
        error: false,
      };
      case GET_ONLY_USER_SUCCESS:
      const { user } = action
      return {
        ...state,
        sync: false,
        error: false,
        selected: user
      };
      
      case FETCH_BLOCK_USER:
      const { id, active } = action
      const temp= state.data.filter(user => {
        if(user.id === id){
          user.active = !active
        }
        return user
      })
      return {
        ...state,
        data: temp, 
        sync: false,
        error: false,
        selected: user
      };
      case BLOCK_USER_FAILED:
      const tempUser= state.data.filter(user => {
        if(user.id === action.id){
          user.active = action.active
        }
        return user
      })
      return {
        ...state,
        data: tempUser, 
        sync: false,
        error: false,
        selected: user
      };
      
    default:
      return state;
  }
}
