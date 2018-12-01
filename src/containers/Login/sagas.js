import { takeEvery, call, put } from 'redux-saga/effects';
import { FETCH_LOGIN, LOGOUT } from './constants';
import { signInWithEmailAndPassword, verifyPermission, signOutAdmin } from '../../lib/firebase';
import { actionLoginSuccess } from './actions';
import { history } from '../../lib/history';


function* setLogout () {
	try {
		yield call(signOutAdmin)
	} catch (error) {
		
	}
}

function* fetchLogin({ values }) {
	try {
		const user = yield call(signInWithEmailAndPassword, values)
		console.log(user)
		if (user.status === 'success') {
			const { uid } = user
			const permission = yield call(verifyPermission, uid)
			if (permission) {
				yield put (actionLoginSuccess(user))
				history.push('/shops')
			}
		}

	} catch (error) {
		console.log(error)
	}


}

export default function* watchLoginSaga() {
	yield takeEvery(FETCH_LOGIN, fetchLogin);
	
}
