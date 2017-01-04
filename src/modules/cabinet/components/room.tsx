import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch, Action} from 'redux';

import {IBase, IRoom, IReduxState} from 'models';
import {Row, Panel} from 'components';

import {roomInfoLoad} from '../actions/creators';
import {CabinetRoomsRibbon} from './cabinetRoomsRibbon';

interface IProps {
    room: IRoom;
    //Приходит из роутера
    params: {
        baseId: string,
        roomId: string    
    };
    actions: {
        roomInfoLoad: (roomId: string) => (dispatch) => void
    }
}

interface IState {

}

class Room extends React.Component<IProps, IState> {
    componentWillMount() {
        debugger;
        this.props.actions.roomInfoLoad(this.props.params.roomId);
    }

    render() {
        const {room} = this.props;

        return (
            <div> {
                room ?
                <Panel>
                    {room.coverPic ? <img className="img" src={room.coverPic}/> : null}
                    <Row title="Название" content={room.name}/>
                    <Row title="Площадь" content={room.area}/>
                </Panel> :
                <span>Loading...</span>
            }
            </div>
        )
    }
}

const mapStateToProps = (state: IReduxState) => {
    return {
        room: state.cabinet.currentRoom
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({roomInfoLoad}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Room)