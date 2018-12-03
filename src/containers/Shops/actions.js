import { FETCH_GET_SHOPS, GET_SHOPS_SUCCESS, GET_SHOPS_FAILED, GET_AUTOCOMPLETE, GET_AUTOCOMPLETE_SUCCESS, GET_PLACE_BY_ID, GET_PLACE_BY_ID_SUCCESS, FETCH_ADD_SHOP, ADD_SHOP_SUCCESS, BLOCK_SHOP, BLOCK_SHOP_FAILED } from './constants';

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
export function actionFetchAddShop(place) {
  return {
    type: FETCH_ADD_SHOP,
    place
  };
}
export function actionAddShopSuccess() {
  return {
    type: ADD_SHOP_SUCCESS
  };
}
export function actionBlockShop(values) {
  return {
    type: BLOCK_SHOP,
    values
  };
}
export function actionBlockShopFailed(values) {
  return {
    type: BLOCK_SHOP_FAILED,
    values
  };
}
