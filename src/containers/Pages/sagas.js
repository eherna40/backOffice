import { put,call, takeEvery } from 'redux-saga/effects';
import { FETCH_GET_PAGES, FETCH_SET_PAGES } from "./constants";
import { pagesGetAll, pagesSet } from '../../lib/firebase';
import { actionGetPagesSuccess } from './actions';

function* getPages() {
	try {
		const res = yield call(pagesGetAll)
		if (res.empty) {

		} else {
			const pages = res.docs.filter(page => {
				return page
			});
			yield put (actionGetPagesSuccess(pages))
		}

	} catch (error) {
		console.log(error)
	}
}

function* setPage({values}) {
	try {
		yield call (pagesSet, values)
	} catch (error) {
		
	}
	
}



export default function* watchPagesSaga() {
	yield takeEvery(FETCH_GET_PAGES, getPages);
	yield takeEvery(FETCH_SET_PAGES, setPage)

}
