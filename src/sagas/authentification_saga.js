import { call, put, delay } from 'redux-saga/effects';
import {doLoginFaillure, doLoginSuccess, doRegisterSuccess, doRegisterFaillure} from "../actions/authentification_actions";
import {login, register} from '../api/authentification_api'

//login action
function *handleLoginRequest(action) {
    try{
        const {user} = action
        const result = yield call (login, user)
        yield delay(5000);
        yield put(doLoginSuccess(result))
    }catch (e) {
        yield delay(5000);
        yield put(doLoginFaillure(e))
    }

}
//register action
function *handleRegisterRequest(action) {
    try{
        const {user} = action
        const result = yield call (register, user)
        yield delay(5000);
        yield put(doRegisterSuccess(result))
    }catch (e) {
        yield delay(5000);
        yield put(doRegisterFaillure(e))
    }

}

export {
    handleLoginRequest,
    handleRegisterRequest,
}