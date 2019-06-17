import {takeEvery, all} from 'redux-saga/effects'
import {authentification_constants} from "../constants/authentification_constants";
import {handleLoginRequest, handleLoginFacebookRequest, handleRegisterRequest} from './authentification_saga'

function *watchAll() {
    yield all([
        takeEvery(authentification_constants.LOGIN_REQUEST, handleLoginRequest),
        takeEvery(authentification_constants.LOGIN_FACEBOOK_REQUEST, handleLoginFacebookRequest),
        takeEvery(authentification_constants.REGISTER_REQUEST, handleRegisterRequest),
    ])
}
export default watchAll