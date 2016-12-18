import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';

export interface INavBarProps {
    title: string;
}

export class NavBar extends React.Component<INavBarProps, null> {
    render() {
        return (
            <AppBar 
                title={this.props.title}>
            </AppBar>
        )
    }
}