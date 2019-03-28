import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {Router as AppRouter} from "react-router";
import {Provider} from "react-redux";
import store from "./store";
import history from './history';

ReactDOM.render(
    <Provider store={store}>
        <AppRouter history={history}>
            <App />
        </AppRouter>
    </Provider>
    ,
    document.getElementById('root'));

