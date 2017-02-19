import * as Redux from 'redux';
import * as types from './types';
import {
    IReduxAction,
    ICredentials,
    IRegisterViewModel,
    IUser
} from 'models';
import {
    Register,
    Login,
    Logout
} from '../service';
import {
    LogIn,
    LogOut
} from 'api'

export const login = (credentials: ICredentials, handleLogin: () => void) => {
    return (dispatch) => {
        dispatch(loginStart(credentials));
        Login({loginObject: credentials.login, password: credentials.password}).then(user => {
            dispatch(loginEnd(user));
        }).then(() => {
            handleLogin();
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        dispatch(logoutStart());
        Logout().then(() => {
            dispatch(logoutEnd());
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

const loginEnd = (user: IUser) : IReduxAction => {
    return {
        type: types.LOGIN_END,
        payload: user
    }
}

const logoutStart = () : IReduxAction => {
    return {
        type: types.LOGOUT_START,
        payload: null
    }
}

const logoutEnd = () : IReduxAction => {
    return {
        type: types.LOGOUT_END,
        payload: null
    }
}