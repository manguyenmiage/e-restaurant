import React from 'react'
import Button from "react-bootstrap/Button";


export default function AuthButton (props) {
    return (
        <Button variant="success" type="submit" size="lg" block>
            {props.label}
            {props.isRegistering  && <span className="loading"><i className="fas fa-spinner  fa-spin"></i></span>}
            {props.loggingIn  && <span className="loading"><i className="fas fa-spinner  fa-spin"></i></span>}
        </Button>
    )
}