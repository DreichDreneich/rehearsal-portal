import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {bindActionCreators} from 'redux';
import {
    PasswordInput, 
    TextInput, 
    SimpleButton
} from 'components';
import {
    IReduxState,
    ICredentials
} from 'models';
import {
    logout
} from '../actions/creators';

interface IProps {
    actions: {
        logout: (userId: string) => (dispatch) => void
    }
    userId: string;
}

interface IState {
    login?: string;
    password?: string;
}

class AuthMenuItem extends React.Component<IProps, IState> {
    state: IState = {
        login: null,
        password: null
    }


    renderLogin = () => {
        return (
            <Link className="navbar-brand" to={'/login'}>Login</Link>
        )
    }

    handleLogoutClick = () => {
        this.props.actions.logout(this.props.userId);
    }

    renderLogout = () => {
        return (
            <span>
                <Link className="navbar-brand" to={'/'} onClick={this.handleLogoutClick}>Logout</Link>
                <Link className="navbar-brand" to={'/cabinet'}>Cabinet</Link>
            </span>
        )
    }

    render() {
        return this.props.userId ? this.renderLogout() : this.renderLogin();
    }                     
}

const mapStateToProps = (state: IReduxState) => {
    return {
        userId: state.user.userId
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({logout}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthMenuItem)