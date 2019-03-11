import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {BrowserRouter as AppRouter} from "react-router-dom";


ReactDOM.render(
    <AppRouter>
        <App />
    </AppRouter>
    ,
    document.getElementById('root'));

