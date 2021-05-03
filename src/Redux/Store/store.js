import { createStore, applyMiddleware } from 'redux'
import rootReducer from '../Reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../Sagas'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware)
)

// const store = createStore(reducer)

sagaMiddleware.run(rootSaga);

export default store