import * as React from 'react';
import {Link} from 'react-router';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import {List, ListItem} from 'material-ui/List';
import {Toolbar, ToolbarGroup} from 'material-ui/Toolbar';

interface IAppState {
    leftMenuOpened: boolean;
}

export class App extends React.Component<null, IAppState> {

    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <List>
                        <ListItem primaryText="Inbox" containerElement={<Link to="/ribbon" />} />
                        <ListItem primaryText="Starred" containerElement={<Link to="/news" />} />
                    </List>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}