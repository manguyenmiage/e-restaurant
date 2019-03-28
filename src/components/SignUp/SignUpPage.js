import React, {Component, Fragment} from 'react'
import RegisterForm from "./FormSignUp";
import Card from "react-bootstrap/Card";
import './SignUp.css'
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default class SignUpPage extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {

        return (
            <div className="loginBody">
                <Container>
                    <Row className="justify-content-md-center">
                        <Col xs={12} md={6}>
                            <Card className="LoginCard">
                                <Card.Body>
                                    <RegisterForm/>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>

        )
    }
}