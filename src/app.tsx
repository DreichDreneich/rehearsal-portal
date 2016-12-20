import * as React from 'react';
import {Link} from 'react-router';

interface IAppState {
    leftMenuOpened: boolean;
}

interface IRoute {
    link: string;

    name:string;
    childrens?: IRoute[];
}

export class App extends React.Component<null, IAppState> {
    routes: IRoute[] = [
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

    render() {
        return (
                <div>
                    {this.props.children}
                </div>
        );
    }
}