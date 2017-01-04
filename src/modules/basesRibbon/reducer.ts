import {IReduxAction} from 'models';

import * as types from './actions/types';
import {IBaseUser, IBase, IRoom, IBasesRibbonState} from 'models';

const initialState: any = {
    bases: [],
    loading: false
}

const cabinet = (state: IBasesRibbonState = initialState, action: IReduxAction)=> {
    switch(action.type) {
        case types.BASES_BY_FILTER_LOADED:
            return Object.assign({}, state, {bases: action.payload, loading: false});
        case types.BASES_BY_FILTER_LOAD:
            return Object.assign({}, state, {loading: true});
        default:
            return state;
    }
}

export default cabinet;