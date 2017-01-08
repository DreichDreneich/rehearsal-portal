import {IReduxAction} from 'models';

import * as types from './actions/types';
import {IBaseUser, IBase, IRoom, IRoomsRibbonState} from 'models';

const initialState: any = {
    bases: [],
    loading: false,
    rooms: [],
    filter: {}
}

const roomsRibbon = (state: IRoomsRibbonState = initialState, action: IReduxAction)=> {
    switch(action.type) {
        case types.ROOMS_BY_FILTER_LOADED:
            return Object.assign({}, state, {bases: action.payload.bases, rooms: action.payload.rooms, loading: false});
        case types.ROOMS_BY_FILTER_LOAD:
            return Object.assign({}, state, {loading: true});
        default:
            return state;
    }
}

export default roomsRibbon;