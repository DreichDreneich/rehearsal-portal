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
            <div className="rcard col-xs-12 col-md-4">
                <RCard
                    key={key}
                    title={room.name}
                    image={room.coverPic} 
                    actions={[
                    <SimpleButton title="Подробнее" link={'/cabinet/base/' + this.props.baseId + '/room/' + room.id} />
                    ]}
                >
                </RCard>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.rooms.map((base, idx) => {
                    return this.renderRoom(base, idx);
                })}
            </div>
        )
    }
}