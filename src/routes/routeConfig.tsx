import * as React from 'react';
import {IRoute} from '../models';
import {AuthMenuItem} from 'modules';

export const routeConfig = () : IRoute[]=> {
    return [
        {
            link: "ribbon",
            name: "Поиск комнаты",
        },
        {
            link: "news",
            name: "Новости"
        }
    ];
}

export const rightSection = () :(IRoute | JSX.Element) [] => {
    return (
        [
            <AuthMenuItem key='auth-menu-item'/>
        ]
    )
}