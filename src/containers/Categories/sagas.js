import { put, call, takeEvery } from 'redux-saga/effects';
import { GET_CATEGORIES } from './constants';
import { catGetAll } from '../../lib/firebase';
import { actionGetCategoriesSuccess } from './actions';

function* getCategories() {
	try {
        let cats = []
        const res = yield call(catGetAll)
        if(res.empty === false){
            res.forEach(function(doc) {
                const id = doc.id
                cats = [...cats, {id, ...doc.data()} ]
            });
        }
        yield put(actionGetCategoriesSuccess(cats))

    } catch (error) {
        
    }
}


export default function* watchCatsSaga() {
	yield takeEvery(GET_CATEGORIES, getCategories);

	

}
