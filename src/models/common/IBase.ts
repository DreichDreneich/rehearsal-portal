import {IRoom} from './IRoom';

export interface IBase {
    id: string;
    baseUserId: string;
    name: string;
    email?: string;
    phones?: string[];
    pic?: string;
}