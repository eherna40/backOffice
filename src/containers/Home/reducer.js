import { SET_USERS } from './constants';

const initialState = { users: [] };

export default function homereducer(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: action.users
      };
    default:
      return state;
  }
}
