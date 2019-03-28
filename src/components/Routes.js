import React from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./Home/Home"
import LoginPage from "./Login/LoginPage"
import Default from "./Default"
import SignUpPage from "./SignUp/SignUpPage"
import Profil from "./Profil/Profil"


const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={LoginPage}/>
            <Route exact path="/signup" component={SignUpPage}/>
            <Route exact path="/profil" component={Profil}/>
            <Route component={Default}/>
        </Switch>
    )
}

export default Routes