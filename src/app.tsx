import * as React from 'react';
import {Link} from 'react-router';

import {LogIn} from './api';
import {MainMenu} from './components';
import {Authentication} from './modules';
import {routeConfig, rightSection} from './routes/routeConfig';

interface IAppState {
    leftMenuOpened: boolean;
    userId: string;
}

export class App extends React.Component<null, IAppState> {
    state: IAppState = {
        leftMenuOpened: false,
        userId: null
    }

    render() {
        return (
                <div>
                    <MainMenu 
                        title="Rehearsal Portal" 
                        routeConfig={routeConfig()} 
                        rightSectionConfig={rightSection()} />
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
        );
    }
}