import {IBase, IBaseUser, IRoom, IBasesRibbonFilter} from 'models';

export interface IReduxState {
    cabinet: ICabinetState;
    basesRibbon: IBasesRibbonState;
}

export interface ICabinetState {
    bases: IBase[];
    baseUser: IBaseUser;
    currentBase: {
        base: IBase;
        rooms: IRoom[];
    }
    currentRoom: IRoom;
}

export interface IBasesRibbonState {
    bases: IBase[];
    filter: IBasesRibbonFilter;
    loading: boolean;
}