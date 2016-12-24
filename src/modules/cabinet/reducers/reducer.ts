import {IReduxAction} from 'models';

import * as types from '../actions/types';
import {IBaseUser, IBase, IRoom} from 'models';

export interface IState {
    baseUser: IBaseUser;
    bases: IBase[];
    currentBase: {
        base: IBase;
        rooms: IRoom[];
    }
}

const initialState: any = {
    currentBase: {},
    bases: [],
    baseUser: {}
}

const cabinet = (state: IState = initialState, action: IReduxAction)=> {
    debugger;
    switch(action.type) {
        case types.BASEUSER_INFO_LOADED:
            return Object.assign({}, state, {baseUser: action.payload});
        case types.BASES_LOADED:
            return Object.assign({}, state, {bases: action.payload});
        case types.BASE_INFO_LOADED: {
            let currentBase = Object.assign({}, state.currentBase, {base: action.payload})
            return Object.assign({}, state, {currentBase: currentBase})
        }
        case types.ROOMS_LOADED: {
            let currentBase = Object.assign({}, state.currentBase, {rooms: action.payload})
            return Object.assign({}, state, {currentBase: currentBase})
        }
        default:
            return state;
    }
}

export default cabinet;