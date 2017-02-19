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
        logout: () => (dispatch) => void
    }
    userId: string;
}


class AuthMenuItem extends React.Component<IProps, void> {
    renderLogin = () => {
        return (
            <div>
                <Link className="navbar-brand" to={'/registration'}>Registration</Link>
                <Link className="navbar-brand" to={'/login'}>Login</Link>            
            </div>
        )
    }

    handleLogoutClick = () => {
        this.props.actions.logout();
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