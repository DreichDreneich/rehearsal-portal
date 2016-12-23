import * as Redux from 'redux';

import {IBaseUser, IReduxAction} from 'models';
import * as types from './types';
import {getBaseUserInfo} from 'api';

const baseUserInfoLoad = (userId: string) => {
    return (dispatch) => {
        getBaseUserInfo(userId).then(result => {
            dispatch(baseUserInfoLoaded(result));
        })
    }
}

const baseUserInfoLoaded = (info: IBaseUser) : IReduxAction => {
    return {
        type: types.BASEUSER_INFO_LOADED,
        payload: info
    }
}

export {
    baseUserInfoLoad,
    baseUserInfoLoaded
}