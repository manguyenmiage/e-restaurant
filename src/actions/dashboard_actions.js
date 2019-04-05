import {dashboard_constants} from '../constants/dashboard_constants'

function doSnackBarClose () {
    return {type: dashboard_constants.SNACK_BAR_CLOSE}
}

export {
    doSnackBarClose
}

