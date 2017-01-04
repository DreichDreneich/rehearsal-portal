import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';

import {IBaseUser, IBase, IRoom, IReduxState} from 'models';
import {cloneReactElement} from 'helpers';
import {baseUserInfoLoad} from './actions/creators';
import {Row, Label, SimpleButton, Panel} from 'components';
import {CabinetBaseRibbon} from './components/cabinetBaseRibbon';

interface IProps {
    baseUser: IBaseUser;
    dispatch: any;
    bases: IBase[];
}

class Cabinet extends React.Component<IProps, null> {
    componentWillMount = () => {
        this.props.dispatch(baseUserInfoLoad("1"));
    }

    renderPhones = () => {
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
                <Panel>
                    {
                        this.props.baseUser.pic ? 
                            <img className="media-object img" src={this.props.baseUser.pic} /> : 
                            null 
                    }
                    <Row 
                        title="Название"
                        content={this.props.baseUser.name}
                    />
                    {this.renderPhones()}
                </Panel>
            </div>
        )
    }

    renderBases = () => {
        return (
            <div className="col-md-7">
                {
                    this.props.bases ?
                        <CabinetBaseRibbon bases={this.props.bases}/> :
                        <SimpleButton title="Добавить базу"/>
                }
            </div>
        )
    }

    renderBaseUser = () => {
        return (
            <div>
                {this.props.baseUser ? this.renderBaseUserInfo() : <h1>Loading...</h1>}
                {this.props.bases ? this.renderBases() : <h1>Loading...</h1>}
            </div>
        )
    }

    render() {
        return (
            <Panel>
                <h2> Личный кабинет </h2>
                {this.renderBaseUser()}
            </Panel>
        )
    }
}

const mapStateToProps = (state: IReduxState) => {
    return {
        baseUser: state.cabinet.baseUser,
        bases: state.cabinet.bases
    }
}

export default connect(mapStateToProps)(Cabinet)