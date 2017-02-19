import * as React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router';
import {Router} from 'react-router';

import {IBaseUser, IBase, IRoom, IReduxState} from 'models';
import {cloneReactElement} from 'helpers';
import {baseUserInfoLoad} from './actions/creators';
import {Row, Label, SimpleButton, Panel, RCard, PageHeader} from 'components';
import {CabinetBaseRibbon} from './components/cabinetBaseRibbon';

interface IProps {
    baseUser: IBaseUser;
    dispatch: any;
    bases: IBase[];
    userId: string;
    router: Router.InjectedRouter
}


//Компонент для BaseUser
class Cabinet extends React.Component<IProps, void> {
    componentWillMount = () => {
        if(this.props.userId) {
            this.props.dispatch(baseUserInfoLoad(this.props.userId));
        } else {
            this.props.router.push('/login');
        }
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
    return {
        userId: state.user.userId,
        baseUser: state.cabinet.baseUser,
        bases: state.cabinet.bases
    }
}

export default connect(mapStateToProps)(Cabinet)