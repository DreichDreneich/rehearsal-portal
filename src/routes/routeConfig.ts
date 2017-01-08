import {IRoute} from '../models';

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
    let cabinetLink : IRoute = {
        link: "cabinet",
        name: "Личный кабинет"
    }

    return (
        [
            cabinetLink
        ]
    )
}