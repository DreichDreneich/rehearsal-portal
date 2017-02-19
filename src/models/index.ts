import {IRoute} from './common/IRoute';
import {IRoom} from './common/IRoom';
import {IBaseUser} from './common/IBaseUser';
import {IBase} from './common/IBase';
import {IReduxAction} from './common/IReduxAction';
import {UIContextType} from './common/UIContextType';
import {ICredentials, IRegisterViewModel} from './authentication/ICredentials';
import {IDateSpan} from './common/DateSpan';
import {
    IReduxState, 
    ICabinetState,
    IRoomsRibbonState,
    IUserState
} from './IReduxState';
import {IRoomsRibbonFilter} from './basesRibbon/IBasesRibbonFilter';

interface IUser {
    id: string;
    email: string;
    login: string;
    bandsParticipant: string[]
    bandUsers: string[],
    baseUsers: IBaseUser[]
}

export {
    IRoute,
    IRoom,
    IBase,
    IBaseUser,
    IReduxAction,
    UIContextType,
    IReduxState,
    ICabinetState,
    IRoomsRibbonFilter,
    IRoomsRibbonState,
    ICredentials,
    IUserState,
    IDateSpan,
    IRegisterViewModel,
    IUser
}