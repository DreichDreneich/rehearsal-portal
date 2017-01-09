import * as React from 'react';
import {PasswordInput, TextInput, SimpleButton} from 'components';

interface IProps {
    onLogin: (login: string, password: string) => void;
    userId?: string;
}

interface IState {
    login?: string;
    password?: string;
}

export class Authentication extends React.Component<IProps, IState> {
    state: IState = {
        login: null,
        password: null
    }

    handlePasswordChange = (password: string) => {
        const newState = Object.assign({}, this.state, {password});
        this.setState(newState);
    }

    handleLoginChange = (login: string) => {
        const newState = Object.assign({}, this.state, {login});
        this.setState(newState);
    }

    renderLogin = () => {
        return (
            <li className='login'>
                <TextInput
                    className='col-md-4'
                    value={this.state.login} 
                    onChange={this.handleLoginChange} 
                />
                <PasswordInput 
                    className='col-md-4'
                    value={this.state.password} 
                    onChange={this.handlePasswordChange} 
                />
                <div  className='col-md-4'>
                    <SimpleButton 
                        title='Войти' 
                        onClick={() => this.props.onLogin(this.state.login, this.state.password)} 
                    />
                </div>
            </li>
        )
    }

    renderLogout = () => {
        return (
            <li>
                Logout
            </li>
        )
    }

    render() {
        if(this.props.userId) {
            return this.renderLogout();
        } else {
            return this.renderLogin();
        }
    }                    
}