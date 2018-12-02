import { all, fork } from 'redux-saga/effects';
import watchGetShopSaga from '../containers/Shops/sagas';
import watchLoginSaga from '../containers/Login/sagas';
import watchUsersSaga from '../containers/Users/sagas';


export default function* root() {
  yield all([
    fork (watchLoginSaga),
    fork(watchGetShopSaga),
    fork(watchUsersSaga)
  ]);
}
