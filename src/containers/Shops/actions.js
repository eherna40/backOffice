import { FETCH_GET_SHOPS, GET_SHOPS_SUCCESS, GET_SHOPS_FAILED, GET_AUTOCOMPLETE, GET_AUTOCOMPLETE_SUCCESS, GET_PLACE_BY_ID, GET_PLACE_BY_ID_SUCCESS } from './constants';

export function actionFetchGetShops() {
  return {
    type: FETCH_GET_SHOPS
  };
}

export function actionGetShopsSuccess(shops) {
  return {
    type: GET_SHOPS_SUCCESS,
    shops
  };
}

export function actionGetShopsFailed(shops) {
  return {
    type: GET_SHOPS_FAILED,
    shops
  };
}

export function actionGetAutoComplete(value, token) {
  return {
    type: GET_AUTOCOMPLETE,
    value,
    token
  };
}

export function actionGetAutoCompleteSuccess(predictions) {
  return {
    type: GET_AUTOCOMPLETE_SUCCESS,
    predictions
  };
}
export function actionGetPlaceByIdSuccess(place) {
  return {
    type: GET_PLACE_BY_ID_SUCCESS,
    place
  };
}

export function actionGetPlaceById(id) {
  return {
    type: GET_PLACE_BY_ID,
    id
  };
}