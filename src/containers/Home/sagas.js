import { takeLatest } from 'redux-saga/effects';
import { GET_USERS_SAGA } from './constants';


function* workerGetUsersSaga() {

}

export default function* watchGetUsersSaga() {
  yield takeLatest(GET_USERS_SAGA, workerGetUsersSaga);
}
