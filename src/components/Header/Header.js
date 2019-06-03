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
import AccountDrawer from "../Drawer/AccountDrawer";
import TabAccount from "../Tab/TabAccount";
import withSizes from 'react-sizes'

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

    renderAccountDrawer = () => (
        <div>
            <AccountDrawer/>
        </div>
    )

    renderTabAccount = () => (
        <div>
            <CustomizedAppBarConnect/>
            <TabAccount/>
        </div>
    )

    renderAppBar = () => (
        <div>
            <CustomizedAppBarConnect/>
        </div>
    )


    render() {
        if (this.props.loggedIn) {
            switch (this.props.location.pathname) {
                case routes.START_TRIP:
                    return this.renderStartTripDrawer()
                case routes.USER_ACCOUNT:
                    if(!this.props.isMobile)
                        return this.renderAccountDrawer()
                    else
                        return this.renderTabAccount()
                default:
                    return this.renderAppBar()

            }
        } else {
            return this.renderHeaderUnAuthentificated()
        }

    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})
const mapSizesToProps = ({ width }) => ({
    isMobile: width < 900,
})


const HeaderConnect = connect(mapStateToProps)(Header)
const HeaderSize = withSizes(mapSizesToProps)(HeaderConnect)

export default withRouter(HeaderSize)