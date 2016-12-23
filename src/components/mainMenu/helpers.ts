import {IRoute} from 'models';

export const isRoute = (obj: any) : obj is IRoute => {
    return (<IRoute>obj).link !== undefined && (<IRoute>obj).name !== undefined;
}