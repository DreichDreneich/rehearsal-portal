import * as Redux from 'redux';
import * as types from './types';
import {
    IReduxAction,
    ICredentials
} from 'models';
import {
    LogIn,
    LogOut
} from 'api'

export const login = (credentilas: ICredentials) => {
    return (dispatch) => {
        dispatch(loginStart(credentilas));
        LogIn(credentilas.login, credentilas.password).then(userId => {
            dispatch(loginEnd(userId));
        })
    }
}

export const logout = (userId: string) => {
    return (dispatch) => {
        dispatch(logoutStart(userId));
        LogOut(userId).then(result => {
            dispatch(logoutEnd(result));
        })
    }
}


const loginStart = (credentilas: ICredentials) : IReduxAction => {
    return {
        type: types.LOGIN_START,
        payload: credentilas
    }
}

const loginEnd = (userId: string) : IReduxAction => {
    return {
        type: types.LOGIN_END,
        payload: userId
    }
}

const logoutStart = (userId: string) : IReduxAction => {
    return {
        type: types.LOGOUT_START,
        payload: userId
    }
}

const logoutEnd = (result: boolean) : IReduxAction => {
    return {
        type: types.LOGOUT_END,
        payload: result
    }
}