import * as React from 'react';
import {Link} from 'react-router';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';
import {NavBar, NavBarElement} from './components';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import FlatButton from 'material-ui/FlatButton';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

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

    getNavigation = () => {
        return this.routes.map((route, i) => {
            return(
                <NavBarElement key={i}>
                    {
                        route.childrens ?
                            <DropDownMenu>
                                {
                                    route.childrens.map((ch, index) => {
                                    return(
                                            <MenuItem primaryText={ch.name} key={index} containerElement={<Link to={route.link} />}></MenuItem>
                                    ); 
                                })}
                            </DropDownMenu> :
                            <Link to={route.link} >
                                <FlatButton> {route.name} </FlatButton>
                            </Link> 
                            
                    }
                    
                </NavBarElement>
            )
        });
    }

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <NavBar title="RehearsalPortal">
                        {this.getNavigation()}
                    </NavBar>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}