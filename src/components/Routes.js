import React, {Component} from 'react'
import {Route, Switch} from "react-router-dom"
import Home from "./Home/Home"
import LoginPage from "./Login/LoginPage"
import Default from "./Default"
import SignUpPage from "./SignUp/SignUpPage"
import Dashboard from "./Dashboard/Dashboard"
import StartTrip from "./StartTrip/StartTrip"
import ProtectedRoute from './ProtectedRoute'
import connect from "react-redux/es/connect/connect";
import {withRouter} from "react-router-dom";

class RoutesCheck extends Component  {

    render() {
        return (
            <Switch>
                <ProtectedRoute exact path="/dashboard" component={Dashboard} loggedIn={this.props.loggedIn}/>
                <ProtectedRoute exact path="/start-trip" component={StartTrip} loggedIn={this.props.loggedIn}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/login" component={LoginPage}/>
                <Route exact path="/signup" component={SignUpPage}/>
                <Route component={Default}/>
            </Switch>
        )
    }

}
const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})


const Routes = connect(mapStateToProps)(RoutesCheck)

export default withRouter(Routes)