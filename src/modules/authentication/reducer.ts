import * as types from './actions/types';
import {
    IUserState,
    IReduxAction
} from 'models';

const initialState: any = {
    userId: null
}

const user = (state: IUserState = initialState, action: IReduxAction)=> {
    debugger;
    switch(action.type) {
        case types.LOGIN_START:
            return state;
        case types.LOGIN_END:
            return Object.assign({}, state, {userId: action.payload});
        case types.LOGOUT_START:
            return state;
        case types.LOGOUT_END:
            if(action.payload) {
                return Object.assign({}, state, {userId: null}) 
            } else {
                return state;
            }
        default:
            return state;
    }
}

export default user;