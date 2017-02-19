import {IReduxAction} from 'models';

import * as types from '../actions/types';
import {IBaseUser, IBase, IRoom, ICabinetState} from 'models';
import {BEGIN, ERROR, SUCCESS} from 'helpers/reducerHelper';

const initialState: any = {
    currentBase: {},
    bases: [],
    baseUser: {}
}

const cabinet = (state: ICabinetState = initialState, action: IReduxAction)=> {
    switch(action.type) {
        case (`${types.GET_BASE_USER}_${BEGIN}`):
            return state; 
        case (`${types.GET_BASE_USER}_${SUCCESS}`):
            let newState = Object.assign({}, state);
            newState.baseUser = action.payload;
            return newState; 
        case (`${types.GET_BASE_USER}_${ERROR}`):
            return state; 
        /////////////////////////////////////////////////////////////
        case types.BASEUSER_INFO_LOADED:
            return Object.assign({}, state, {baseUser: action.payload});
        case types.BASES_LOADED:
            return Object.assign({}, state, {bases: action.payload});
        case types.BASE_INFO_LOADED: {
            let currentBase = Object.assign({}, state.currentBase, {base: action.payload});
            return Object.assign({}, state, {currentBase: currentBase});
        }
        case types.ROOMS_LOADED: {
            let currentBase = Object.assign({}, state.currentBase, {rooms: action.payload});
            return Object.assign({}, state, {currentBase: currentBase});
        }
        case types.ROOM_INFO_LOADED: {
            return Object.assign({}, state, {currentRoom: action.payload});
        }
        default:
            return state;
    }
}

export default cabinet;