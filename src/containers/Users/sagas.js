import { put, call, takeEvery} from 'redux-saga/effects';
import { FETCH_GET_USER, FETCH_GET_ONLY_USER, FETCH_BLOCK_USER } from "./constants";
import { userGetAll, userGetOnly, userBlock } from '../../lib/firebase';
import { actionGetUserSuccess, actionGetOnlyUserSuccess, actionBlockUserFailed  } from './actions';




function* blockUser ({id, active}) {
  const values = {
    id,
    active
  }
  try {
    const block = yield call(userBlock, values)
    if(!block){
      yield put(actionBlockUserFailed(id, active))
    }
  } catch (error) {
    console.log(error)
  }
}

function* getOnlyUser ({id}) {

  try {
    const user = yield call(userGetOnly, id)
    yield put(actionGetOnlyUserSuccess(user))
  } catch (error) {
    console.log(error)
  }
}

function* getUsers () {

  try {
    let users = []
    const res = yield call(userGetAll)
    if(res.empty === false){
        res.forEach(function(doc){
            const id = doc.id
            users = [...users, {id, ...doc.data() }]
        });
    }
    yield put(actionGetUserSuccess(users))

} catch (error) {
    console.log(error)
}
}

export default function* watchUsersSaga() {
  yield takeEvery(FETCH_GET_USER, getUsers);
  yield takeEvery(FETCH_GET_ONLY_USER, getOnlyUser)
  yield takeEvery(FETCH_BLOCK_USER, blockUser)
}
