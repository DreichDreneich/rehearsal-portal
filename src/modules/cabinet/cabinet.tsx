import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {IBaseUser} from 'models';
import {baseUserInfoLoad} from './actions/creators';
import {Row, Label, SimpleButton} from 'components';
import {CabinetBaseRibbon} from './components/cabinetBaseRibbon';

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

    renderPhones = () => {
        debugger;
        if(this.props.baseUser.phones) {
            return (
                <Row 
                    title="Телефоны"
                    content={this.props.baseUser.phones.
                        map((phone, idx) => {
                            return <Label key={idx} text={phone}/>
                        })
                    }
                />
            )
        } else {
            return <SimpleButton title="Добавить телефон"/>
        }
    }

    renderBaseUserInfo = () => {
        return (
            <div className="col-md-5">
                <div className="panel panel-default">
                    <div className="panel-body">
                        <img className="media-object img" src={this.props.baseUser.pic} />
                        <Row 
                            title="Название"
                            content={this.props.baseUser.name}
                        />
                        {this.renderPhones()}
                    </div>
                </div>
            </div>
        )
    }

    renderBases = () => {
        return (
            <div className="col-md-7">
                <div className="panel panel-default">
                    <div className="panel-body">
                        {this.props.baseUser.bases ?
                            <CabinetBaseRibbon bases={this.props.baseUser.bases}/> :
                            <SimpleButton title="Добавить базу"/>
                        }
                        
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="panel panel-info">
                <div className="panel-body">
                    <h2> Личный кабинет </h2>
                    {this.renderBaseUserInfo()}
                    {this.renderBases()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        baseUser: state.cabinet
    }
}

export default connect(mapStateToProps)(Cabinet)