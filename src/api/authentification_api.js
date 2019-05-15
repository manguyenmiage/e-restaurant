import {user_credentials} from '../mock/authentification_mock'
//Call api login
const login = (user) => {
    if (user.email === user_credentials.email && user.password === user_credentials.password) {
        return (user)
    } else {
        throw('Invalid Credentials')
    }
}

//Call api register
const register = (user) => ({user})

export {
    login,
    register
};