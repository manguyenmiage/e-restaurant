import {authentification_constants} from "../constants/authentification_constants";

const INITIAL_STATE = {
    loggingIn : false,
    loggedIn : false,
    user : null
}

const applyLogInSuccess = (state, action) => ({
    loggingIn: false,
    loggedIn : true,
    user : action.user
})

const applyLogInRequest = (state, action) => ({
    loggingIn: true,
    loggedIn : false,
    user : action.user
})

function authentificationReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        case authentification_constants.LOGIN_REQUEST :
            return applyLogInRequest(state, action)
        case authentification_constants.LOGIN_SUCCESS :
            return applyLogInSuccess(state, action)
        default:
            return state
    }
}
export default authentificationReducer