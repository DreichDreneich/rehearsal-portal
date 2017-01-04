import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch, Action} from 'redux';

import {IBase, IRoom, IReduxState} from 'models';
import {Row, Panel} from 'components';

import {baseInfoLoad} from '../actions/creators';
import {CabinetRoomsRibbon} from './cabinetRoomsRibbon';

interface IProps {
    base: IBase;
    rooms: IRoom[];
    //Приходит из роутера
    params: {
        baseId: string    
    };
    dispatch: any;

    actions: {
        baseInfoLoad: any
    }
}

interface IState {

}

class Base extends React.Component<IProps, IState> {
    componentWillMount() {
        debugger;
        this.props.dispatch(baseInfoLoad(this.props.params.baseId));
    }

    renderBaseInfo() {
        let result: JSX.Element = null;
        let {base} = this.props;

        if(base) {
            result = (
                <Panel>
                    {base.pic ? <img className="img" src={base.pic}/> : null}
                    <Row title="Название" content={base.name}/>
                    <Row title="Email" content={base.email}/>
                </Panel>
            ) 
        } else {
            result = <h2>Loading...</h2>
        }

        return result;
    }

    renderRoomRibbon() {
        let result: JSX.Element = null;
        let {rooms, base} = this.props;

        return rooms ?
            result = <CabinetRoomsRibbon rooms={rooms} baseId={base.id}/> :
            <h2>Loading...</h2>
    }

    render() {
        debugger;
        return (
            <div>
                <div className="col-md-5">
                    {this.renderBaseInfo()}
                </div>
                <div className="col-md-7">
                    {this.renderRoomRibbon()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IReduxState) => {
    return {
        base: state.cabinet.currentBase.base,
        rooms: state.cabinet.currentBase.rooms
    }
}

// function mapDispatchToProps(dispatch) {
//     return {
//         actions: bindActionCreators({baseInfoLoad}, dispatch)
//     }
// }

export default connect(mapStateToProps)(Base)