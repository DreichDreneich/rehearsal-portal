import * as React from 'react';
import {Link} from 'react-router';
const injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

export class App extends React.Component<null, null> {
    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <ul>
                        <li><Link to="/news">Page 1</Link></li>
                        <li><Link to="/ribbon">Page 2</Link></li>
                    </ul>
                    {this.props.children}
                </div>
            </MuiThemeProvider>
        );
    }
}