import React from 'react'
import {Redirect, Route} from "react-router-dom";

const ProtectedRoute = ({ component: Component, loggedIn,  ...rest }) => (
    <Route {...rest} render={(props) => (
        loggedIn === true ?
            (<Component {...props} />) :  (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}
            />
        )
    )} />
);
export default ProtectedRoute