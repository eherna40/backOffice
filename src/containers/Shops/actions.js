import { FETCH_GET_SHOPS, GET_SHOPS_SUCCESS, GET_SHOPS_FAILED, GET_AUTOCOMPLETE, GET_AUTOCOMPLETE_SUCCESS, GET_PLACE_BY_ID, GET_PLACE_BY_ID_SUCCESS, FETCH_ADD_SHOP, ADD_SHOP_SUCCESS, BLOCK_SHOP, BLOCK_SHOP_FAILED, FETCH_ONLY_SHOP, GET_ONLY_SHOP_SUCCES, FETCH_EDIT_SHOP, EDIT_SHOP_SUCCESS, EDIT_SHOP_ERROR } from './constants';

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
export function ationFetchGetOnlyShop(id) {
  return {
    type: FETCH_ONLY_SHOP,
    id
  };
}
export function actionGetOnlyShopSuccess(selected) {
  return {
    type: GET_ONLY_SHOP_SUCCES,
    selected
  };
}
export function actionFetchEditShop(values) {
  return {
    type: FETCH_EDIT_SHOP,
    values
    
  };
}
export function actionEditShopSuccess(valuesforSet) {
  return {
    type: EDIT_SHOP_SUCCESS,
    valuesforSet
    
  };
}

export function actionEditShopError() {
  return {
    type: EDIT_SHOP_ERROR,    
  };
}