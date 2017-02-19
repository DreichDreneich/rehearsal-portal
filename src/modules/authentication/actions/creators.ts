import * as Redux from 'redux';
import * as types from './types';
import {
    IReduxAction,
    ICredentials,
    IRegisterViewModel,
    IUser
} from 'models';
import {
    Register
} from '../service';
import {
    LogIn,
    LogOut
} from 'api'

export const login = (credentilas: ICredentials, handleLogin: () => void) => {
    return (dispatch) => {
        dispatch(loginStart(credentilas));
        LogIn(credentilas.login, credentilas.password).then(userId => {
            dispatch(loginEnd(userId));
        }).then(() => {
            handleLogin();
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

export const register = (model: IRegisterViewModel) => {
    return (dispatch) => {
        dispatch(registerStart(model));
        Register(model).then(response => {
            dispatch(registerEnd(response));
        })
    }
}

const registerStart = (model: IRegisterViewModel) : IReduxAction => {
    return {
        type: types.REGISTER_START,
        payload: model
    }
}

const registerEnd = (user: IUser) : IReduxAction => {
    return {
        type: types.REGISTER_END,
        payload: null
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