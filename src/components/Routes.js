import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home/Home";
import Login from "./Login/Login";
import Default from "./Default";
import SignUp from "./SignUp/SignUp";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/signup" component={SignUp}/>
            <Route component={Default}/>
        </Switch>
    )
}

export default Routes