import {user_credentials_mock} from '../mock/authentification_mock'
//Call api login
const login = (user) => {
    if (user.email === user_credentials_mock.email && user.password === user_credentials_mock.password) {
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