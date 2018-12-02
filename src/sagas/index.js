import { all, fork } from 'redux-saga/effects';
import watchGetShopSaga from '../containers/Shops/sagas';
import watchLoginSaga from '../containers/Login/sagas';
import watchUsersSaga from '../containers/Users/sagas';
import watchPagesSaga from '../containers/Pages/sagas';
import watchPromoSaga from '../containers/Promos/sagas';
import watchCatsSaga from '../containers/Categories/sagas';


export default function* root() {
  yield all([
    fork (watchLoginSaga),
    fork(watchGetShopSaga),
    fork(watchUsersSaga),
    fork(watchPagesSaga),
    fork(watchPromoSaga),
    fork(watchCatsSaga)
  ]);
}
