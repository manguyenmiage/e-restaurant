import {user_credentials_mock} from '../mock/authentification_mock'
import {api_routes} from '../constants/api_routes_constants'
import axios from 'axios'
import {doLoginFbSuccess} from "../actions/authentification_actions";

//Call api login
const login = (user) => {
    if (user.email === user_credentials_mock.email && user.password === user_credentials_mock.password) {
        return (user)
    } else {
        throw('Invalid Credentials')
    }
}

const fbAuth = (user) => {

    let accessToken = user.token.accessToken

    return axios.post(api_routes.basePath+api_routes.users.fb.auth, {"access_token" : accessToken})
}

//Call api register
const register = (user) => ({user})

export {
    login,
    register,
    fbAuth
};