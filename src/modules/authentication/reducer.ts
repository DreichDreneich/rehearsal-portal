import * as types from './actions/types';
import {
    IUserState,
    IReduxAction
} from 'models';

const initialState: any = {
    user: null,
    //ToDO delete
    userId: null
}

const user = (state: IUserState = initialState, action: IReduxAction)=> {
    switch(action.type) {
        case types.LOGIN_START:
            return state;
        case types.LOGIN_END:
            return Object.assign({}, state, {user: action.payload});
        case types.LOGOUT_START:
            return state;
        case types.LOGOUT_END:
            if(action.payload) {
                return Object.assign({}, state, {userId: null}) 
            } else {
                return state;
            }
        case types.REGISTER_START:
            return state;
        case types.REGISTER_END:
            return Object.assign({}, state, {user: action.payload});
        default:
            return state;
    }
}

export default user;