import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

export interface INavBarProps {
    title: string;
}

export class NavBar extends React.Component<INavBarProps, null> {
    render() {
        return (
            <Toolbar>
                <ToolbarGroup firstChild={true}>
                    <h2> {this.props.title} </h2>
                </ToolbarGroup>
                {this.props.children}
            </Toolbar>
        )
    }
}