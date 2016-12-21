import * as React from 'react';
import {Link} from 'react-router';

import {MainMenu} from './components';
import routeConfig from './routes/routeConfig';

interface IAppState {
    leftMenuOpened: boolean;
}

export class App extends React.Component<null, IAppState> {

    render() {
        return (
                <div>
                    <MainMenu title="Rehearsal Portal" routeConfig={routeConfig()} />
                    {this.props.children}
                </div>
        );
    }
}