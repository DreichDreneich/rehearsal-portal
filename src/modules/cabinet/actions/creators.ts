import * as Redux from 'redux';

import {
    IBaseUser, 
    IBase, 
    IRoom,
    IReduxAction
} from 'models';
import * as types from './types';
import {
    getBaseUserInfo, 
    getBasesByBaseUserId,
    getBaseById,
    getRoomById,
    getRoomsByBaseId
} from 'api';

const baseUserInfoLoad = (userId: string) => {
    return (dispatch) => {
        Promise.all([
            getBaseUserInfo(userId),
            getBasesByBaseUserId(userId)
        ]).then(result => {
            dispatch(baseUserInfoLoaded(result[0]));
            dispatch(basesLoaded(result[1]))
        });
    }
}

const baseInfoLoad = (baseId: string) => {
    return (dispatch) => {
        Promise.all([
            getBaseById(baseId),
            getRoomsByBaseId(baseId)
        ]).then(result => {
            dispatch(baseLoaded(result[0]));
            dispatch(roomsLoaded(result[1]))
        });
    }
}

const roomInfoLoad = (roomId: string) => {
    return (dispatch) => {
        getRoomById(roomId).
        then(result => {
            dispatch(roomInfoLoaded(result));
        })
    }
}

const baseUserInfoLoaded = (info: IBaseUser) : IReduxAction => {
    return {
        type: types.BASEUSER_INFO_LOADED,
        payload: info
    }
}

const basesLoaded = (bases: IBase[]) : IReduxAction => {
    return {
        type: types.BASES_LOADED,
        payload: bases
    }
}

const baseLoaded = (base: IBase) : IReduxAction => {
    return {
        type: types.BASE_INFO_LOADED,
        payload: base
    }
}

const roomsLoaded = (rooms: IRoom[]) : IReduxAction => {
    return {
        type: types.ROOMS_LOADED,
        payload: rooms
    }
}

const roomInfoLoaded = (room: IRoom) : IReduxAction => {
    return {
        type: types.ROOM_INFO_LOADED,
        payload: room
    }
}

export {
    baseUserInfoLoad,
    baseUserInfoLoaded,
    basesLoaded,
    roomsLoaded,
    baseLoaded,
    baseInfoLoad,
    roomInfoLoad
}