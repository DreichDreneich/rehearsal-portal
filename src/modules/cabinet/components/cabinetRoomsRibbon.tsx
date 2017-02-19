import * as React from 'react';
import {IRoom, UIContextType} from 'models';
import {Row, Panel, SimpleButton, RCard} from 'components';

interface IProps {
    baseId: string;
    rooms: IRoom[];
}

interface IState {

}

export class CabinetRoomsRibbon extends React.Component<IProps, IState> {
    renderRoom(room: IRoom, key: any) {
        return (
            <div key={key} className="rcard col-xs-12 col-md-4">
                <RCard
                    title={room.name}
                    image={room.coverPic} 
                    actions={[
                        <SimpleButton key="toRoom" title="Подробнее" link={'/cabinet/base/' + this.props.baseId + '/room/' + room.id} />
                    ]}
                >
                </RCard>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.rooms.map((room, idx) => this.renderRoom(room, idx))}
            </div>
        )
    }
}