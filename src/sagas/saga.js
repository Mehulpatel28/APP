// import { delay } from "redux-saga";
import { takeLatest, put, delay, takeEvery } from "redux-saga/effects";

function* incrementAsync() {
    yield delay(2000);
    yield put({ type: "INCREASE_COUNTER_ASYNC", value: 5 });
}

export function* rootSaga() {
    yield takeEvery("INCREASE_COUNTER", incrementAsync);
}