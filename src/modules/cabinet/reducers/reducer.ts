import {IReduxAction} from 'models';

import * as types from '../actions/types';
import {IState} from '../cabinet';

const cabinet = (state: IState = <any>{}, action: IReduxAction)=> {
    switch(action.type) {
        case types.BASEUSER_INFO_LOADED:
            return action.payload;
        default:
            return state;
    }
}

export default cabinet;