import { takeLatest, put, delay, all } from 'redux-saga/effects';

/* 
Other saga effects and examples.
* yield call([axios, axios.get], 'http://localhost:6543/users');

* If you have more than one sagas
*
* export function* rootSaga() {
    yield all([
      fetchUserswatchers(),
      watchDownUp()
    ]);
}

*/

function* ageUpAsync() {
  yield delay(4000);
  yield put({
    type: 'AGE_UP_ASYNC',
    value: 1
  });
}

function* ageDownAsync() {
  yield delay(4000);
  yield put({
    type: 'AGE_DOWN_ASYNC',
    value: 1
  });
}

function* watchAgeUp() {
  yield takeLatest('AGE_UP', ageUpAsync);
}

function* watchDownUp() {
  yield takeLatest('AGE_DOWN', ageDownAsync);
}


export default function* rootSaga() {
  yield all([
    watchAgeUp(),
    watchDownUp()
  ]);
}