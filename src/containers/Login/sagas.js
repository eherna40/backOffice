import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_LOGIN } from './constants';
import { signInWithEmailAndPassword, verifyPermission } from '../../lib/firebase';
import { actionLoginSuccess } from './actions';
import { history } from '../../lib/history';


function* fetchLogin({ values }) {
	try {
		const user = yield call(signInWithEmailAndPassword, values)
		if (user.status === 'success') {
			const { uid } = user
			const permission = yield call(verifyPermission, uid)
			if (permission) {
				yield put (actionLoginSuccess(user))
			}
		}

	} catch (error) {
		console.log(error)
	}


}

export default function* watchLoginSaga() {
	yield takeEvery(FETCH_LOGIN, fetchLogin);
	
}
