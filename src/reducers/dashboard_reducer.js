import {dashboard_constants} from "../constants/dashboard_constants";
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


function dashBoardReducer (state = INITIAL_STATE, action) {
    switch (action.type) {
        case dashboard_constants.SNACK_BAR_CLOSE :
            return applySnackBarClose(state, action)
        case authentification_constants.LOGOUT_REQUEST :
            return resetShowSnackBar(state, action)
        default:
            return state
    }
}
export default dashBoardReducer