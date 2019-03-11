import React from 'react'
import {Route, Switch} from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Default from "./Default";


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route component={Default}/>
        </Switch>
    )
}

export default Routes