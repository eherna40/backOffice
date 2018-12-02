import { FETCH_GET_PAGES, GET_PAGES_SUCCESS, GET_PAGES_FAILED, FETCH_SET_PAGES, SET_PAGES_FAILED } from "./constants";

export function actionFetchGetPages() {
  return {
    type: FETCH_GET_PAGES
  };
}
export function actionGetPagesSuccess(pages) {

  return {
    type: GET_PAGES_SUCCESS,
    pages
  };
}
export function actionGetPagesFailed(error) {
  return {
    type: GET_PAGES_FAILED,
    error
  };
}
export function actionFetchSetPages(values) {
  return {
    type: FETCH_SET_PAGES,
    values
  };
}
export function actionSetPagesFailed(error) {
  return {
    type: SET_PAGES_FAILED,
    error
  };
}