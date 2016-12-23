import * as Redux from 'redux';

export interface IReduxAction extends Redux.Action {
    payload: any;
}