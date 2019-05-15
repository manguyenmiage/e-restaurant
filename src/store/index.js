import {applyMiddleware, createStore, compose} from "redux";
import {createLogger} from "redux-logger";
import rootReducer from '../reducers'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const logger = createLogger()
const saga = createSagaMiddleware()
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    blacklist: ['createTripState'],
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const  store = createStore(
    persistedReducer,
    storeEnhancers(
        applyMiddleware(saga, logger),
    )

)
const persistor = persistStore(store)

saga.run(rootSaga)

export  {
    store,
    persistor
}