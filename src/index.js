import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Router as AppRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {store, persistor} from "./store";
import history from './history';
import {PersistGate} from 'redux-persist/integration/react'


ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppRouter history={history}>
                <App/>
            </AppRouter>
        </PersistGate>
    </Provider>
    ,
    document.getElementById('root'));

