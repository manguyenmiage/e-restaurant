import React from 'react'
import SocialLogin from 'react-social-login'
import {FacebookLoginButton} from "react-social-login-buttons";

const FacebookAuthButton = ({ children, triggerLogin, ...props }) =>
{
    return (
        <FacebookLoginButton onClick={triggerLogin} {...props} type='button'>
            Se connecter avec Facebook {props.loggingInFb  &&<span className="loading"><i className="fas fa-spinner  fa-spin"></i></span>}
        </FacebookLoginButton>
    )
}

export default SocialLogin(FacebookAuthButton)