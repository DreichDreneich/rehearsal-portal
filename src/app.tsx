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

    private handleLogin = (login: string, password: string) => {
        LogIn(login, password).then(userId =>{
            let newState = Object.assign({}, this.state, {userId});
            this.setState(newState);
        });
    }

    private renderAuthentication = () => {
        return (
            <Authentication key="auth" userId={this.state.userId} onLogin={this.handleLogin}/>
        )
    }

    calculateRightSectionConfig = () => {
        return rightSection().concat(this.renderAuthentication());
    }

    render() {
        return (
                <div>
                    <MainMenu 
                        title="Rehearsal Portal" 
                        routeConfig={routeConfig()} 
                        rightSectionConfig={this.calculateRightSectionConfig()} />
                    <div className="container">
                        {this.props.children}
                    </div>
                </div>
        );
    }
}