import React from 'react'
import Button from "react-bootstrap/Button";
import  './SignOut.css'

export default function SignOutButton (props) {
    return (
        <div>
            <Button variant="danger" type="button" onClick={props.action}>
                {props.label}
            </Button>
        </div>
    )
}