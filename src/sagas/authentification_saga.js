import { call, put } from 'redux-saga/effects';
import {doLoginFaillure, doLoginSuccess, doRegisterSuccess, doRegisterFaillure} from "../actions/authentification_actions";
import {login, register} from '../api/authentification_api'

//login action
function *handleLoginRequest(action) {
    try{
        const {user} = action
        const result = yield call (login, user)
        yield put(doLoginSuccess(result))
    }catch (e) {
        yield put(doLoginFaillure(e))
    }

}

//register action
function *handleRegisterRequest(action) {
    try{
        const {user} = action
        const result = yield call (register, user)
        yield put(doRegisterSuccess(result))
    }catch (e) {
        yield put(doRegisterFaillure(e))
    }

}

export {
    handleLoginRequest,
    handleRegisterRequest,
}