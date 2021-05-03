// import { INCREASE_COUNTER } from '../Components/CounterApp';

// import { delay } from "redux-saga";




import { takeLatest, put, delay, takeEvery } from "redux-saga/effects";

function* incrementAsync() {
    yield delay(3000);
    yield put({ type: "INCREASE_COUNTER_ASYNC" });
}

function* IncrementCounter() {
    yield takeEvery("INCREASE_COUNTER", incrementAsync);
}

export default IncrementCounter