import { createStore, applyMiddleware } from 'redux'
import reducer from '../Reducer/reducer'

import createSagaMiddleware from 'redux-saga'
import { rootSaga } from '../Sagas/saga'


const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware)
)

// const store = createStore(reducer)

sagaMiddleware.run(rootSaga);

export default store