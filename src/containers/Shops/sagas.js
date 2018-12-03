import { put, call, takeEvery} from 'redux-saga/effects';
import { FETCH_GET_SHOPS, GET_AUTOCOMPLETE, GET_PLACE_BY_ID, FETCH_ADD_SHOP, BLOCK_SHOP } from './constants';
import { shopGetAll, getPredictions, getPlaceById, shopCreate, shopBlock } from '../../lib/firebase';
import { actionGetShopsSuccess, actionGetAutoCompleteSuccess, actionBlockShop } from './actions';
import { history } from '../../store';


function* fetchAddShop ({ place }) {
    try {
    const saveShop = yield call(shopCreate, place)
    if(saveShop){
        yield call(workerGetShop)
        history.push('/shops')
    }
    } catch (error) {
        console.log(error)
    }
    
}

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
function* workerGetShop() {

    try {
        let shops = []
        const res = yield call(shopGetAll)
        if(res.empty === false){
            res.forEach(function(doc) {
                const id = doc.id
                shops = [...shops, {id, ...doc.data()} ]
            });
        }
        yield put(actionGetShopsSuccess(shops))

    } catch (error) {
        
    }
}

function* blockShop({values}){
    try {
		const res = yield call (shopBlock,values )
		if(!res){
			yield put(actionBlockShop(values))
		}
	} catch (error) {
		
	}
}

export default function* watchGetShopSaga() {
  yield takeEvery(FETCH_GET_SHOPS, workerGetShop);
  yield takeEvery(GET_AUTOCOMPLETE, fetchGetAutoComplete)
  yield takeEvery(GET_PLACE_BY_ID, fetchGetPlaceById)
  yield takeEvery(FETCH_ADD_SHOP, fetchAddShop)
  yield takeEvery(BLOCK_SHOP, blockShop)
}
