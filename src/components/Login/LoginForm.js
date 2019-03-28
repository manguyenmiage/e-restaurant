import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import './Login.css'
import {GoogleLogin} from 'react-google-login';
import {connect} from "react-redux";
import {doLoginRequest} from '../../actions/authentification_actions'

import {Link} from "react-router-dom";
import {Alert} from "react-bootstrap";
import {Formik} from "formik";
import schema from "./SchemaValidation";

class LoginForm extends Component {

    constructor(props) {
        super(props)
    }

    handleSubmit = (values, actions) => {
        const {email, password} = values
        this.props.loginRequest({email, password})
        actions.setSubmitting(false)
    }

    render() {
        return (
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                }}
                validationSchema={schema}
                onSubmit={this.handleSubmit}

                render={props => (
                    <div>
                        <Form
                            name="loginForm"
                            noValidate
                            onSubmit={props.handleSubmit}>
                            <Form.Group controlId="formBasicEmail">
                                <Form.Label>E-mail</Form.Label>
                                <Form.Control
                                    type="email"
                                    placeholder="Saisir votre e-mail "
                                    name="email"
                                    value={props.values.email}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.email && props.errors.email}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Mot de passe</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Mot de passe"
                                    name="password"
                                    value={props.values.password}
                                    onChange={props.handleChange}
                                    isInvalid={props.touched.password && props.errors.password}
                                />
                                <Form.Control.Feedback type="invalid">
                                    {props.errors.email}
                                </Form.Control.Feedback>
                            </Form.Group>
                            {console.log(this.props)}
                            {this.props.logginFail ?
                                <Alert variant='danger'>
                                    {this.props.msgError}
                                </Alert> : ''}
                            <Button variant="success" type="submit" size="lg" block>
                                Se connecter
                                {this.props.loggingIn && <span className="loading"><i className="fas fa-spinner  fa-spin"></i></span>}
                            </Button>
                            <hr/>

                            <GoogleLogin
                                onSuccess={'responseGoogle'}
                                onFailure={'responseGoogle'}
                                clientId={1212121212121}
                                buttonText="Google"
                                className="socialButton"
                            />
                        </Form>
                        <div className="buttonSignUp">
                            <Link
                                className="outline-success"
                                role="button"
                                to="/signup"
                            >
                                Créer un compte
                            </Link>
                        </div>
                    </div>
                )
                }
            />)
    }
}

const mapStateToProps = state => ({
    loggedIn: state.authentificationState.loggedIn,
    loggingIn: state.authentificationState.loggingIn,
    logginFail: state.authentificationState.logginFail,
    msgError: state.authentificationState.msgError
})


function mapDispatchToProps(disptach) {
    return {
        loginRequest: user => disptach(doLoginRequest(user))
    }
}

const FormLogin = connect(mapStateToProps, mapDispatchToProps)(LoginForm)
export default (FormLogin)

