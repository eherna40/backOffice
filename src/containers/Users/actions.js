import {  
  FETCH_GET_USER, 
  GET_USER_SUCCESS, 
  GET_USER_FAILED, 
  FETCH_GET_ONLY_USER, 
  GET_ONLY_USER_SUCCESS, 
  GET_ONLY_USER_FAILED, 
  FETCH_BLOCK_USER,
  BLOCK_USER_FAILED
} from './constants';

export function actionFetchGetUser() {
  return {
    type: FETCH_GET_USER
  };
}
export function actionGetUserSuccess(users) {
  return {
    type: GET_USER_SUCCESS,
    users

  };
}

export function actionGetUserFailed(error) {
  return {
    type: GET_USER_FAILED,
    error
  };
}


export function actionFetchGetOnlyUser(id) {
  return {
    type: FETCH_GET_ONLY_USER,
    id
  };
}

export function actionGetOnlyUserSuccess(user) {
  return {
    type: GET_ONLY_USER_SUCCESS,
    user
  };
}


export function actionGetOnlyUserFailed(error) {
  return {
    type: GET_ONLY_USER_FAILED,
    error
  };
}

export function actionBlockUser(id,active) {
  return {
    type: FETCH_BLOCK_USER,
    id,
    active
  };
}

export function actionBlockUserFailed(id,active) {
  return {
    type: BLOCK_USER_FAILED,
    id,
    active
  };
}