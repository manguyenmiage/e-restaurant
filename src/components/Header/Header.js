import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import trident from '../../assets/img/trident.png'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import MiniDrawerConnect from "../Drawer/MiniDrawer";
import {withRouter} from "react-router-dom";
import {routes} from '../../constants/routes_constants'
import CustomizedAppBarConnect from "../AppBar/CustomizedAppBar";

class Header extends Component {
    //Header unauthentificated
    renderHeaderUnAuthentificated = () => (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Link to="/">
                    <img className="logo" src={trident} alt="logo"/>
                </Link>
                <Link to="/login" className="cta loginButton">
                    <span>Se connecter</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </Link>
            </Navbar>

        </div>
    )

    //Header authentificated
    renderStartTripDrawer = () => (
        <div>
            <MiniDrawerConnect/>
        </div>
    )

    renderAppBar = () => (
        <div>
            <CustomizedAppBarConnect/>
        </div>
    )


    render() {
        console.log(this.props.location.pathname)
        if (this.props.loggedIn) {
            if(this.props.location.pathname === routes.START_TRIP)
                return this.renderStartTripDrawer()
            else {
                return this.renderAppBar()
            }
        } else if (!this.props.loggedIn)
            return this.renderHeaderUnAuthentificated()
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})

const HeaderConnect = connect(mapStateToProps)(Header)

export default withRouter(HeaderConnect)