import * as React from 'react';
import {IRoom, UIContextType} from 'models';
import {Row, Panel, SimpleButton} from 'components';

interface IProps {
    baseId: string;
    rooms: IRoom[];
}

interface IState {

}

export class CabinetRoomsRibbon extends React.Component<IProps, IState> {
    renderImg(url){
        if(url) {
            return(
                <div className="col-md-4">
                    <img className="media-object img" src={url}/>
                </div>
            );
        } else {
            return null;
        }
    }

    renderRoom(room: IRoom, key: any) {
        return (
            <Panel key={key} type={UIContextType.INFO}>
                {this.renderImg(room.coverPic)}
                <div className="col-md-8">
                    <Row title="Название" content={room.name}/>
                </div>
                <div className="col-md-12">
                    <SimpleButton title="Подробнее" link={'/cabinet/base/' + this.props.baseId + '/room/' + room.id} />
                </div>
            </Panel>
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