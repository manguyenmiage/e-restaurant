import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as AppRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from "./store";


ReactDOM.render(
    <Provider store={store}>
        <AppRouter>
            <App />
        </AppRouter>
    </Provider>

    ,
    document.getElementById('root'));

