import { put, takeLatest, call, takeEvery} from 'redux-saga/effects';
import { FETCH_GET_SHOPS, GET_AUTOCOMPLETE, GET_PLACE_BY_ID } from './constants';
import { shopGetAll, getPredictions, getPlaceById } from '../../lib/firebase';
import { actionGetShopsSuccess, actionGetAutoCompleteSuccess } from './actions';


function* fetchGetAutoComplete ({value, token}) {
try {
    const predictions = yield call(getPredictions, value, token)
    if(predictions.status === 'OK'){
        yield put(actionGetAutoCompleteSuccess(predictions.predictions))
    }
} catch (error) {
    console.log(error)
}
}

function* fetchGetPlaceById ({id}){

    try {
       const place =  yield call (getPlaceById, id)
       console.log(place)
    } catch (error) {
        
    }
}
function* workerGetUsersSaga() {

    try {
        let shops = []
        const res = yield call(shopGetAll)
        if(res.empty === false){
            res.forEach(function(doc) {
                const id = doc.id
                shops = [{ ...shops, id, ...doc.data() }]
            });
        }
        yield put(actionGetShopsSuccess(shops))

    } catch (error) {
        
    }
}

export default function* watchGetShopSaga() {
  yield takeEvery(FETCH_GET_SHOPS, workerGetUsersSaga);
  yield takeEvery(GET_AUTOCOMPLETE, fetchGetAutoComplete)
  yield takeEvery(GET_PLACE_BY_ID, fetchGetPlaceById)
}
