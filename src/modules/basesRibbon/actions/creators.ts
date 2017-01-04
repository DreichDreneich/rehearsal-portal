import * as Redux from 'redux';
import * as types from './types';
import {
    IRoom,
    IBase,
    IReduxAction,
    IBasesRibbonFilter
} from 'models';

import {
    getBasesByFilter
} from 'api';



const basesByFilterLoad = (filter: IBasesRibbonFilter) => {
    debugger;
    return (dispatch) => {
        dispatch(basesByFilterLoadAction());
        getBasesByFilter(filter).
        then(result => {
            dispatch(basesByFilterLoaded(result));
        })
    }
}

const basesByFilterLoadAction = () : IReduxAction => {
    return {
        type: types.BASES_BY_FILTER_LOADED,
    }
}

const basesByFilterLoaded = (bases: IBase[]) : IReduxAction => {
    return {
        type: types.BASES_BY_FILTER_LOADED,
        payload: bases
    }
}


export {
    basesByFilterLoad,
}