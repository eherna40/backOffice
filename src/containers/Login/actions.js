import { FETCH_LOGIN, LOGIN_SUCCES, LOGOUT } from "./constants";

export function actionFetchLogin(values) {
  return {
    type: FETCH_LOGIN,
    values
  };
}

export function actionLoginSuccess(user) {
  return {
    type: LOGIN_SUCCES,
    user
  };
}


export function actionLogout() {
  return {
    type: LOGOUT
  };
}
