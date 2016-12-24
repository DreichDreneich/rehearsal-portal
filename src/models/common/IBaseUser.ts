import {IBase} from './IBase';

export interface IBaseUser {
    id: string;
    name: string;
    phones?: string[];
    pic?: string;
}