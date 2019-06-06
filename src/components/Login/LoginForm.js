/* global FB*/
import React, {Component} from 'react'
import Form from "react-bootstrap/Form";
import './Login.css'
import {connect} from "react-redux";
import {doLoginRequest} from '../../actions/authentification_actions'
import AuthButton from '../Button/AuthButton'
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import {Alert} from "react-bootstrap";
import {Formik} from "formik";
import schema from "./SchemaValidation";
import {withRouter} from "react-router-dom";
import history from '../../history'
import CustomLink from "../CustomLink/CustomLink";

class LoginForm extends Component {

    componentDidMount() {

        if (this.props.loggedIn) {
            history.push('/start-trip/')
        }

        window.fbAsyncInit = function() {
            FB.init({
                appId      : '461054191307859',
                cookie     : false,
                xfbml      : false,
                version    : 'v3.3'
            });
          //  FB.AppEvents.logPageView();
            FB.Event.subscribe('auth.statusChange', function(response) {
                if (response.authResponse) {
                    //this.checkLoginState();
                } else {
                    console.log('---->User cancelled login or did not fully authorize.');
                }
            }.bind(this));
        }.bind(this);

        // Load the SDK asynchronously
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
            js.src = '//connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }

    componentDidUpdate(){
        if (this.props.loggedIn) {
            history.push('/start-trip/')
        }
    }
    handleSubmit = (values, actions) => {
        const {email, password} = values
        this.props.loginRequest({email, password})
        actions.setSubmitting(false)
    }
    handleClickFacebook = () => {
        FB.login(this.checkLoginState())
    }

    statusChangeCallback(response) {
        if (response.status === 'connected') {
            // Logged into your app and Facebook.
           // this.testAPI();
            console.log('connected')
        } else if (response.status === 'not_authorized') {
            console.log('Please log ' +
                'into this app.')
        } else {
            // The person is not logged into Facebook, so we're not sure if
            // they are logged into this app or not.
            console.log('Please log ' +
                'into this app.')
        }
    }
    getInfo() {
        FB.api('/me', 'GET', {fields : 'first_name, last_name, name, id, picture'}, function (response) {
            console.log(response)
        })
    }
    checkLoginState() {
        FB.getLoginStatus(function(response) {
            this.getInfo()
            this.statusChangeCallback(response);
        }.bind(this)
        );
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
                            {this.props.logginFail ?
                                <Alert variant='danger'>
                                    {this.props.msgError}
                                </Alert> : ''}
                            <AuthButton label="Se connecter" loggingIn={this.props.loggingIn}/>
                            <hr/>
                            <FacebookLoginButton onClick={this.handleClickFacebook} >
                                Se connecter avec Facebook
                            </FacebookLoginButton>
                            <GoogleLoginButton onClick={() => alert("Hello")} >
                                Se connecter avec Google
                            </GoogleLoginButton>
                        </Form>
                        <div className="buttonSignUp">
                            <CustomLink
                                label="Créer un compte"
                                url="/signup"
                            >
                                Créer un compte
                            </CustomLink>
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
export default withRouter(FormLogin)

