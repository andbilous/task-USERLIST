import {takeEvery,call,put,all} from 'redux-saga/effects';
import usersApi from '../api'
import types from './users/types'
import {receiveUsers,loadUsersFailure} from '../redux/users/actions'


function* workerLoadUsers(){
    try{
        const data = yield call(usersApi.getUsers);
        yield put(receiveUsers(data.results))
    }catch(err){
        yield put(loadUsersFailure(err))
    }
        
}

function* watchLoadData(){
     yield takeEvery(types.LOAD_USERS,workerLoadUsers);
} 

export default function* rootSaga() {
    yield all([
      watchLoadData()
    ])
  }
