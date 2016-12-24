import {IRoom} from './IRoom';

export interface IBase {
    id: string;
    name: string;
    email?: string;
    phones?: string[];
    pic: string;
}