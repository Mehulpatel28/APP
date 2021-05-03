import { fork } from 'redux-saga/effects';

import fetchUser from '../Reducers/FetchAPIApp/saga'
import IncrementCounter from '../Reducers/Counterapp/saga'

export default function* rootSaga() {
    yield fork(IncrementCounter, 'IncrementCounter');
    yield fork(fetchUser, 'fetchUser');
}








// import { takeLatest, put, delay, takeEvery } from "redux-saga/effects";

// function* incrementAsync() {
//     yield delay(3000);
//     yield put({ type: "INCREASE_COUNTER_ASYNC" });
// }

// export function* rootSaga() {
//     yield takeEvery("INCREASE_COUNTER", incrementAsync);
// }