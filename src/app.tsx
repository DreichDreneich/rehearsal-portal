import * as React from 'react';
import {Link} from 'react-router';

import {MainMenu} from './components';
import {routeConfig, rightSection} from './routes/routeConfig';

interface IAppState {
    leftMenuOpened: boolean;
}

export class App extends React.Component<null, IAppState> {

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