import * as React from 'react';
import {connect} from 'react-redux';
import {Router} from 'react-router';
import {bindActionCreators} from 'redux';
import {
    TextInput, 
    SimpleButton,
    RCard
} from 'components';
import {
    IReduxState,
    ICredentials
} from 'models';
import {
    login
} from './actions/creators';

interface IProps {
    actions: {
        login: (credentials: ICredentials, handleLogin: () => void) => (dispatch) => void
    }
    userId: string;
    router: Router.InjectedRouter
}

interface IState {
    login?: string;
    password?: string;
}

class Authentication extends React.Component<IProps, IState> {
    state: IState = {
        login: '',
        password: ''
    }

    handlePasswordChange = (password: string) => {
        const newState = Object.assign({}, this.state, {password});
        this.setState(newState);
    }

    handleLoginChange = (login: string) => {
        const newState = Object.assign({}, this.state, {login});
        this.setState(newState);
    }

    handleLogin = () => {
        this.props.router.push('/cabinet');
    }

    renderLogin = () => {
        return (
            <div className='col-xs-4 col-xs-offset-4'>
                <RCard 
                    title="Вход в личный кабинет"
                >
                    <TextInput
                        placeholder="Логин или e-mail"
                        value={this.state.login} 
                        onChange={this.handleLoginChange} 
                    />
                    <TextInput 
                        placeholder="Пароль"
                        type='password'
                        value={this.state.password} 
                        onChange={this.handlePasswordChange} 
                    />
                    <SimpleButton 
                        title='Войти' 
                        onClick={() => this.props.actions.login({
                            login: this.state.login, 
                            password: this.state.password
                        }, this.handleLogin)} 
                    />
                </RCard>
                
            </div>
        )
    }
    
    render() {
        return this.renderLogin();
    }                     
}

const mapStateToProps = (state: IReduxState) => {
    return {
        userId: state.user.userId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({login}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Authentication)