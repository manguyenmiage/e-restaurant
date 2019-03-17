import React, {Component} from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import './Login.css'
import { GoogleLogin } from 'react-google-login';
import { FacebookProvider, LoginButton } from 'react-facebook';

export default class Login extends Component {

    state = {

    }

    render() {
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={10} md={6}>
                        <Card className="LoginCard">
                            <Card.Body>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control type="email" placeholder="Saisir votre e-mail " />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Label>Mot de passe</Form.Label>
                                        <Form.Control type="password" placeholder="Mot de passe" />
                                    </Form.Group>
                                    <Button variant="success" type="submit" size="lg" block>
                                        Se connecter
                                    </Button>
                                    <hr/>
                                    <Container>
                                        <Row>
                                            <Col>
                                                <GoogleLogin
                                                    onSuccess={'responseGoogle'}
                                                    onFailure={'responseGoogle'}
                                                    clientId={1212121212121}
                                                    buttonText="Google"
                                                    className="socialButton"
                                                />
                                            </Col>
                                            <Col>
                                                <FacebookProvider appId="123456789">
                                                    <LoginButton
                                                        className="fbButton socialButton"
                                                        scope="email"
                                                        onCompleted={this.handleResponse}
                                                        onError={this.handleError}
                                                    >
                                                        <span><i className="fab fa-facebook-f"></i> Facebook</span>
                                                    </LoginButton>
                                                </FacebookProvider>
                                            </Col>
                                        </Row>
                                    </Container>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}
