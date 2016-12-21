export default () : IRoute[]=> {
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
        },
        {
            link: "cabinet",
            name: "Личный кабинет"
        }
    ];
}