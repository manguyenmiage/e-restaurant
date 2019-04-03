import {profile_constants} from "../constants/profile_constants";
import {authentification_constants} from "../constants/authentification_constants";

const INITIAL_STATE = {
    showSnackBar: false,
}

const applySnackBarClose = (state, action) => {
    return {
        showSnackBar : !state.showSnackBar
    }
}

const resetShowSnackBar = (state, action) => {
    return {
        showSnackBar : !state.showSnackBar
    }
}


function profileReducer (state = INITIAL_STATE, action) {

    switch (action.type) {
        case profile_constants.SNACK_BAR_CLOSE :
            return applySnackBarClose(state, action)
        case authentification_constants.LOGOUT_REQUEST :
            return resetShowSnackBar(state, action)
        default:
            return state
    }
}
export default profileReducer