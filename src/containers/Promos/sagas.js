import { put, call, takeEvery } from 'redux-saga/effects';
import { FETCH_GET_PROMOS, FETCH_ADD_PROMO, BLOCK_PROMO } from "./constants";
import { promosGetAll, promosCreate, promoBlock } from '../../lib/firebase';
import { actionGetPromosSuccess, actionAddPromoSuccess, actionAddPromoFailed, actionBlockPromoFailed } from './actions';
import { history } from '../../store';

function* getPromos() {
	let promos = []
	try {
		const res = yield call(promosGetAll)
		if (res.empty) {
			yield put(actionGetPromosSuccess(promos))
		} else {
		
			res.forEach(function(doc) {
                const id = doc.id
                promos = [...promos, {id, ...doc.data()} ]
            });
			yield put(actionGetPromosSuccess(promos))
	
		}
	} catch (error) {
		console.log(error)
	}
}


function* addPromo({promo}){
	try {
		const res = yield call (promosCreate, promo)
		if(res){
			yield put(actionAddPromoSuccess(promo))
			history.goBack()
		}else{
			
		}
	} catch (error) {
		console.log(error)
	}
}

function* blockPromo ({values}) {


	try {
		const res = yield call (promoBlock,values )
		if(!res){
			yield put(actionBlockPromoFailed(values))
		}
	} catch (error) {
		
	}
}


export default function* watchPromoSaga() {
	yield takeEvery(FETCH_GET_PROMOS, getPromos);
	yield takeEvery(FETCH_ADD_PROMO, addPromo)
	yield takeEvery(BLOCK_PROMO, blockPromo)

}
