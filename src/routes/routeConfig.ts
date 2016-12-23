import {IRoute} from '../models';

export const routeConfig = () : IRoute[]=> {
    return [
        {
            link: "ribbon",
            name: "Лента",
            childrens: [
                {
                    link: "ribbon",
                    name: "Лента1"
                },
                {
                    link: "ribbon",
                    name: "Лента2"
                }
            ]
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