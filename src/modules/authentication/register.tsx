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
    ICredentials,
    IRegisterViewModel
} from 'models';
import {
    register
} from './actions/creators';

interface IProps {
    actions: {
        register: (model: IRegisterViewModel) => (dispatch) => void
    }
    router: Router.InjectedRouter
}

interface IState {
    view: IRegisterViewModel;
}

class Registration extends React.Component<IProps, IState> {
    state: IState = {
        view: {}
    }

    handleViewChange = (value: any) => {
        this.setState(Object.assign({}, this.state, {
            view: Object.assign({}, this.state.view, value)
        }))
    } 

    handlePasswordChange = (password: string) => {
        this.handleViewChange({password});
    }

    handleLoginChange = (login: string) => {
        this.handleViewChange({login});
    }

    handleEmailChange = (email: string) => {
        this.handleViewChange({email});
    }

    handleLogin = () => {
        this.props.router.push('/cabinet');
    }

    render() {
        const {email, login, password} = this.state.view;

         return (
            <div className='col-xs-4 col-xs-offset-4'>
                <RCard 
                    title="Регистрация"
                >
                    <TextInput
                        placeholder="Email"
                        value={email} 
                        onChange={this.handleEmailChange} 
                    />
                    <TextInput
                        placeholder="Логин"
                        value={login} 
                        onChange={this.handleLoginChange} 
                    />
                    <TextInput 
                        placeholder="Пароль"
                        type='password'
                        value={password} 
                        onChange={this.handlePasswordChange} 
                    />
                    <SimpleButton 
                        title='Зарегистрироваться' 
                        onClick={() => this.props.actions.register(this.state.view)} 
                    />
                </RCard>
                
            </div>
        )
    }                     
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({register}, dispatch)
    }
}

export default connect(null, mapDispatchToProps)(Registration)
