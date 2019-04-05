import React, {Component} from 'react'
import Navbar from "react-bootstrap/Navbar";
import './Header.css'
import trident from '../../assets/img/trident.png'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import CustomizedAppBar from "../AppBar/CustomizedAppBar";


class Header extends Component {

    constructor (props) {
        super(props)
    }

    signOut = () => {
        this.props.logoutRequest()
    }

    //Header unauthentificated
    renderHeaderUnAuthentificated = () => (
        <div>
            <CustomizedAppBar/>
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
    renderHeaderAuthentificated = () => (
        <div>
            <CustomizedAppBar/>
        </div>
    )


    render() {
       return this.props.loggedIn ? this.renderHeaderAuthentificated() : this.renderHeaderUnAuthentificated()
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
})

const HeaderConnect = connect(mapStateToProps)(Header)

export default HeaderConnect