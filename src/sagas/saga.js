import { delay } from "redux-saga";
import { takeLatest, put } from "redux-saga/effects";

function* incrementAsync() {
    yield delay(4000);
    yield put({ type: "INCREASE_COUNTER", value: 1 });
}

export function* rootSaga() {
    yield takeLatest("INCREASE_COUNTER", incrementAsync);
}