import {authentification_constants} from '../constants/authentification_constants'

function doLoginRequest (user) {
    return {type : authentification_constants.LOGIN_REQUEST, user}
}
function doLoginFaillure (user) {
    return {type: authentification_constants.LOGIN_FAILLURE, user}
}
function doLogout (user) {
    return {type: authentification_constants.LOGOUT, user}
}
function doLoginSuccess (user) {
    return {type: authentification_constants.LOGIN_SUCCESS, user}
}

export {
    doLoginRequest,
    doLoginSuccess,
    doLoginFaillure,
    doLogout
}

