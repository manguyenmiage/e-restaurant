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
import {connect} from "react-redux";
import {doLoginRequest} from '../../actions/authentification_actions'

class Login extends Component {

    constructor (props) {
        super(props)

        this.state = {
            email : '',
            password : '',
            submitted: false,
            validated: false
        }

    }

    handleSubmit = (event) => {
        event.preventDefault()
        const form = event.currentTarget
        if(form.checkValidity() === false) {
            event.preventDefault()
            event.stopPropagation()
        }

        this.setState({
            validated: true,
            submitted : true
        })

        const {email, password} = this.state
        this.props.loginRequest({email, password})

    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name] : value})
    }

    render() {
        const {email, password, validated, submitted} = this.state
        return (
            <Container>
                <Row className="justify-content-md-center">
                    <Col xs={10} md={6}>
                        <Card className="LoginCard">
                            <Card.Body>
                                <Form
                                    name="loginForm"
                                    noValidate
                                    validated={validated}
                                    onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Label>E-mail</Form.Label>
                                        <Form.Control
                                            type="email"
                                            placeholder="Saisir votre e-mail "
                                            name="email"
                                            value={email}
                                            required
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Veuillez saisir votre e-mail
                                        </Form.Control.Feedback>
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword" >
                                        <Form.Label>Mot de passe</Form.Label>
                                        <Form.Control
                                            type="password"
                                            placeholder="Mot de passe"
                                            name="password"
                                            value={password}
                                            required
                                            onChange={this.handleChange}
                                        />
                                        <Form.Control.Feedback type="invalid">
                                            Veuillez saisir votre mot de passe
                                        </Form.Control.Feedback>
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
const LoginForm = connect(null, mapDispatchToProps)(Login)
export default LoginForm


function mapDispatchToProps(disptach) {
    return {
        loginRequest : user => disptach (doLoginRequest(user))
    }
}

