import { put, call, takeEvery} from 'redux-saga/effects';
import { FETCH_GET_SHOPS, GET_AUTOCOMPLETE, GET_PLACE_BY_ID, FETCH_ADD_SHOP, BLOCK_SHOP, FETCH_ONLY_SHOP, FETCH_EDIT_SHOP } from './constants';
import { shopGetAll, getPlaceById, shopCreate, shopBlock, shopGetOnly, shopModify } from '../../lib/firebase';
import { actionGetShopsSuccess, actionBlockShop, actionGetOnlyShopSuccess, actionEditShopSuccess, actionEditShopError } from './actions';
import { history } from '../../store';
import { FETCH_GET_ONLY_USER } from '../Users/constants';


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
// try {
//     const predictions = yield call(getPredictions, value, token)
//     if(predictions.status === 'OK'){
//         yield put(actionGetAutoCompleteSuccess(predictions.predictions))
//     }
// } catch (error) {
//     console.log(error)
// }
}

function* fetchGetPlaceById ({id}){

    try {
       const place =  yield call (getPlaceById, id)
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

function* getOnlyShop({id}){
    try {
        const res = yield call (shopGetOnly, id)
        if(res.status === 'success'){
            yield put(actionGetOnlyShopSuccess(res))
        }
    } catch (error) {
        
    }
}

function* getEditShop ({values}) {
    try {
       const res =  yield call(shopModify, values)
       if(res){
           yield put (actionEditShopSuccess(values))
       }else{
        yield put (actionEditShopError())
       }
    } catch (error) {
        yield put (actionEditShopError())

        
    }
}

export default function* watchGetShopSaga() {
  yield takeEvery(FETCH_GET_SHOPS, workerGetShop);
  yield takeEvery(GET_AUTOCOMPLETE, fetchGetAutoComplete)
  yield takeEvery(GET_PLACE_BY_ID, fetchGetPlaceById)
  yield takeEvery(FETCH_ADD_SHOP, fetchAddShop)
  yield takeEvery(BLOCK_SHOP, blockShop)
  yield takeEvery(FETCH_ONLY_SHOP, getOnlyShop)
  yield takeEvery(FETCH_EDIT_SHOP, getEditShop)
}
