import * as React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Router} from 'react-router';

import {IBaseUser, IBase, IRoom, IReduxState, IUser} from 'models';
import {cloneReactElement} from 'helpers';
import {baseUserInfoLoad, getBaseUserByUserId} from './actions/creators';
import {Row, Label, SimpleButton, Panel, RCard, PageHeader} from 'components';
import {CabinetBaseRibbon} from './components/cabinetBaseRibbon';

interface IProps {
    baseUser: IBaseUser;
    dispatch: any;
    bases: IBase[];
    user: IUser;
    router: Router.InjectedRouter;
    actions: {
        getBaseUserByUserId: (userId: string) => any;
    }
}


//Компонент для BaseUser
class Cabinet extends React.Component<IProps, void> {
    componentWillMount = () => {
        this.props.actions.getBaseUserByUserId(this.props.user.id);
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
                <RCard
                    title={this.props.baseUser.name}
                    image={this.props.baseUser && this.props.baseUser.pic} 
                >
                    {this.renderPhones()}
                </RCard>
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

    render() {
        return (
            <div>
                <PageHeader 
                    title="Личный кабинет"
                    actions={[
                        {
                            title:"Создать новую сеть баз",
                            link: "cabinet/createBaseUser",
                            enabled: () => true
                        }
                    ]}
                />
                <hr/>
                {this.props.baseUser ? this.renderBaseUserInfo() : <h1>Loading...</h1>}
                {this.props.bases ? this.renderBases() : <h1>Loading...</h1>}
            </div>
        )
    }
}

const mapStateToProps = (state: IReduxState) => {
    debugger;
    return {
        user: state.user.user,
        baseUser: state.cabinet.baseUser,
        bases: state.cabinet.bases
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({getBaseUserByUserId}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cabinet)