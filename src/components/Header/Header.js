import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import './Header.css'
import trident from '../../assets/img/trident.png'
import Button from "react-bootstrap/Button";


const header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/">
                    <img  className="logo" src={trident} alt="logo"/>
                    <span>RestoConnect</span>
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
}


export default header