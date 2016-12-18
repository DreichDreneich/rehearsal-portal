import * as React from 'react';
import AppBar from 'material-ui/AppBar';
import {Link} from 'react-router';
import ToolbarGroup from 'material-ui/Toolbar/ToolbarGroup';


export class NavBarElement extends React.Component<null, null> {
    render() {
        return (
            <ToolbarGroup firstChild={true}>
                {this.props.children}
            </ToolbarGroup>
        )
    }
}