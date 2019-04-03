import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import trident from '../../assets/img/trident.png'
import {connect} from "react-redux";
import SignOutButton from "../Button/SignOutButton";
import {doLogoutRequest} from "../../actions/authentification_actions";


class Header extends Component {

    constructor (props) {
        super(props)
    }

    signOut = () => {
        this.props.logoutRequest()
    }

    renderHeaderUnAuthentificated = () => (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img className="logo" src={trident} alt="logo"/>
                    <span></span>
                </Navbar.Brand>
                <a href="/login" className="cta loginButton">
                    <span>Se connecter</span>
                    <svg width="13px" height="10px" viewBox="0 0 13 10">
                        <path d="M1,5 L11,5"></path>
                        <polyline points="8 1 12 5 8 9"></polyline>
                    </svg>
                </a>
            </Navbar>
        </div>
    )

    renderHeaderAuthentificated = () => (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img className="logo" src={trident} alt="logo"/>
                    <span></span>
                </Navbar.Brand>
                <div className="logoutButton">
                    <SignOutButton label="Se déconnecter" action={this.signOut}/>
                </div>

            </Navbar>
        </div>
    )


    render() {
       return this.props.loggedIn ? this.renderHeaderAuthentificated() : this.renderHeaderUnAuthentificated()
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})

function mapDispatchToProps(disptach) {
    return {
        logoutRequest: () => disptach(doLogoutRequest())
    }
}


const HeaderConnect = connect(mapStateToProps, mapDispatchToProps)(Header)

export default HeaderConnect