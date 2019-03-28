import {authentification_constants} from "../constants/authentification_constants";
import history from '../history'

const INITIAL_STATE = {
    loggingIn : false,
    loggedIn : false,
    logginFail: false,
    isRegistered : false,
    isRegisterFail: false,
    user : null,
    msg : ''
}

const applyLogInSuccess = (state, action) => {
    history.push('/profil')
    return{
        loggingIn: false,
        loggedIn : true,
        logginFail: false,
        user : action.user
    }
}


const applyLogInRequest = (state, action) => ({
    loggingIn: true,
    loggedIn : false,
    user : action.user
})

const applyRegisterSuccess = (state, action) => {
    history.push('/login')
    return {
        isRegistered: true,
        user: action.user
    }

}

const applyLogInFaillure = (state, action) => ({
    logginFail: true,
    user: action.user,
    msgError : 'L\'e-mail et/ou le mot de passe ne sont pas corrects.'
})


function authentificationReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        case authentification_constants.LOGIN_REQUEST :
            return applyLogInRequest(state, action)
        case authentification_constants.LOGIN_SUCCESS :
            return applyLogInSuccess(state, action)
        case authentification_constants.LOGIN_FAILLURE :
            return applyLogInFaillure(state, action)
        case authentification_constants.REGISTER_SUCCESS :
            return applyRegisterSuccess(state, action)
        default:
            return state
    }
}
export default authentificationReducer