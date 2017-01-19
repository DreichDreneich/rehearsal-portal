import {
    IBase, 
    IBaseUser, 
    IRoom, 
    IRoomsRibbonFilter
} from 'models';

export interface IReduxState {
    user: IUserState;
    cabinet: ICabinetState;
    roomsRibbon: IRoomsRibbonState;
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

export interface IRoomsRibbonState {
    bases: IBase[];
    rooms: IRoom[];
    filter: IRoomsRibbonFilter;
    loading: boolean;
}

export interface IUserState {
    userId: string;
}