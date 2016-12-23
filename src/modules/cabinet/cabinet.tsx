import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {IBaseUser} from 'models';
import {baseUserInfoLoad} from './actions/creators';

interface IProps {
    baseUser: IBaseUser;
    dispatch: any;
}

export interface IState {
    baseUser: IBaseUser;
}

class Cabinet extends React.Component<IProps, IState> {
    componentWillMount = () => {
        this.props.dispatch(baseUserInfoLoad("1"));
    }

    render() {
        return (
            <div>
                <h2> Личный кабинет </h2>
                <div className="col-md-3">
                    Меню
                </div>
                <div className="col-md-9">
                    {this.props.baseUser.name}
                    {this.props.baseUser.id}
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    debugger;
    return {
        baseUser: state.cabinet
    }
}

export default connect(mapStateToProps)(Cabinet)