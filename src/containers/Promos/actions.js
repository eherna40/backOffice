import { FETCH_GET_PROMOS, GET_PROMOS_SUCCESS, GET_PROMOS_FAILED, FETCH_ADD_PROMO, ADD_PROMO_SUCCESS, ADD_PROMO_FAILED, BLOCK_PROMO, BLOCK_PROMO_FAILED } from "./constants";

export function actionFetchGetPromos() {
  return {
    type: FETCH_GET_PROMOS
  };
}
export function actionGetPromosSuccess(promos) {
  return {
    type: GET_PROMOS_SUCCESS,
    promos
  };
}
export function actionGetPromosFailed(error) {
  return {
    type: GET_PROMOS_FAILED,
    error
  };
}
export function actionFetchAddPromo(promo) {
  console.log(promo)
  return {
    type: FETCH_ADD_PROMO,
    promo
  };
}
export function actionAddPromoSuccess(promo) {
  return {
    type: ADD_PROMO_SUCCESS,
    promo
  };
}
export function actionAddPromoFailed() {
  return {
    type: ADD_PROMO_FAILED,
  };
}
export function actionBlockPromo(values) {
  return {
    type: BLOCK_PROMO,
    values
  };
}
export function actionBlockPromoFailed(id) {
  return {
    type: BLOCK_PROMO_FAILED,
    id
  };
}