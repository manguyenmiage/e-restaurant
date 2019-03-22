import {takeEvery, all} from 'redux-saga/effects'
import {authentification_constants} from "../constants/authentification_constants";
import {handleLoginRequest} from './authentification_saga'
function *watchAll() {
    yield all([
        takeEvery(authentification_constants.LOGIN_REQUEST, handleLoginRequest)
    ])
}
export default watchAll