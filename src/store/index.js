import {applyMiddleware, createStore, compose} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'

const logger = createLogger()
const saga = createSagaMiddleware()
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const  store = createStore(
    rootReducer,
    storeEnhancers(
        applyMiddleware(saga, logger)
    )

)

saga.run(rootSaga)

export default store