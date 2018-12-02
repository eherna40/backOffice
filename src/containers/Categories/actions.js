import { GET_CATEGORIES, GET_CATEGORIES_SUCCESS } from "./constants";

export function actionGetCategories() {
  return {
    type: GET_CATEGORIES
  };
}


export function actionGetCategoriesSuccess(cats) {
  return {
    type: GET_CATEGORIES_SUCCESS,
    cats
  };
}
