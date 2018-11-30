import { all, fork } from 'redux-saga/effects';
import watchGetUsersSaga from '../containers/Home/sagas';
import watchGetShopSaga from '../containers/Shops/sagas';


export default function* root() {
  yield all([
    fork(watchGetUsersSaga),
    fork(watchGetShopSaga)
  ]);
}
