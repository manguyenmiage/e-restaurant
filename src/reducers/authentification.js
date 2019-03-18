import {authentificationActions} from "../constants/authentificationActions";

const INITIAL_STATE = {
    loggingIn : false,
    loggedIn : false,
    user : null
}

const applyLogInRequest = (state, action) => ({
    loggingIn: true,
    loggedIn : false,
    user : action.user
})

function authentificationReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        case authentificationActions.LOGIN_REQUEST :
            return applyLogInRequest(state, action)
        default:
            return state
    }
}
export default authentificationReducer