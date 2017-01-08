import * as Redux from 'redux';
import * as types from './types';
import {
    IRoom,
    IBase,
    IReduxAction,
    IRoomsRibbonFilter
} from 'models';

import {
    getRoomsByFilter
} from 'api';



const roomsByFilterLoad = (filter: IRoomsRibbonFilter) => {
    debugger;
    return (dispatch) => {
        dispatch(roomsByFilterLoadAction());
        getRoomsByFilter(filter).
        then(result => {
            dispatch(roomsByFilterLoaded(result[0], result[1]));
        })
    }
}

const roomsByFilterLoadAction = () : IReduxAction => {
    return {
        type: types.ROOMS_BY_FILTER_LOAD,
    }
}

const roomsByFilterLoaded = (rooms: IRoom[], bases: IBase[]) : IReduxAction => {
    return {
        type: types.ROOMS_BY_FILTER_LOADED,
        payload: {rooms, bases}
    }
}


export {
    roomsByFilterLoad,
}