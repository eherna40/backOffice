import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_LOGIN, LOGOUT } from './constants';
import { signInWithEmailAndPassword, verifyPermission, logout } from '../../lib/firebase';
import { actionLoginSuccess, actionLoginFailed } from './actions';
import {history} from '../../lib/history'


function* fetchLogin({ values }) {
	try {
		const user = yield call(signInWithEmailAndPassword, values)
		if (user.status === 'success') {
			const { uid } = user
			const permission = yield call(verifyPermission, uid)
			if (permission) {
				yield put (actionLoginSuccess(user))
			}else{
				yield put (actionLoginFailed())
			}
		}else{
			yield put (actionLoginFailed())
		}

	} catch (error) {
		yield put (actionLoginFailed())
	}


}


function* logoutUser (){
	try {
		yield call (logout)
		history.replace('/')
	} catch (error) {
		console.log(error)
	}
}
export default function* watchLoginSaga() {
	yield takeEvery(FETCH_LOGIN, fetchLogin);
	yield takeEvery(LOGOUT, logoutUser)
	
}
