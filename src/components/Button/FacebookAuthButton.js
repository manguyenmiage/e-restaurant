import React from 'react'
import SocialLogin from 'react-social-login'
import {FacebookLoginButton} from "react-social-login-buttons";

const FacebookAuthButton = ({ children, triggerLogin, ...props }) =>
{
    return (
        <FacebookLoginButton onClick={triggerLogin} {...props} type='button'>
            Se connecter avec Facebook
        </FacebookLoginButton>
    )
}

export default SocialLogin(FacebookAuthButton)