import {IBase} from './IBase';

export interface IBaseUser {
    id: string;
    name: string;
    bases: IBase[];
    phones: string[];
}