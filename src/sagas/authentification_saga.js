import { call, put } from 'redux-saga/effects';
import {doLoginFaillure, doLoginSuccess} from "../actions/authentification_actions";
import {login} from '../api/authentification_api'

function *handleLoginRequest(action) {
    try{
        const {user} = action
        const result = yield call (login, user)
        yield put(doLoginSuccess(result))
    }catch (e) {
        yield put(doLoginFaillure(e))
    }

}

export {
    handleLoginRequest
}