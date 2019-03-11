import React from 'react'
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Link} from "react-router-dom";


const style = {
    margin: 0,
    top: 0,
    right: 60,
    bottom:20,
    left: 'auto',
    position: 'fixed',
}

const index = () => {
    return (
        <div>
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="/">E-Restaurant</Navbar.Brand>
                <Nav style={style}>
                    <Nav.Link href="/login">Login</Nav.Link>
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}


export default index