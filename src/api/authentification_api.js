import {user_credentials_mock} from '../mock/authentification_mock'
import {api_routes} from '../constants/api_routes_constants'
import axios from 'axios'

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

    axios.post(api_routes.basePath+api_routes.users.fb.auth, {"access_token" : accessToken}).then(res => console.log(res))
}

//Call api register
const register = (user) => ({user})

export {
    login,
    register,
    fbAuth
};