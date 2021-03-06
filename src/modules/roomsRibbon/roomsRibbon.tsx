import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

import {
    IRoomsRibbonFilter, 
    IReduxState, 
    IRoom, 
    IBase
} from 'models';
import {
    Row, 
    Label, 
    SimpleButton, 
    Panel, 
    TextInput, 
    NumberInput,
    GanttChart,
    RCard 
} from 'components';
import {roomsByFilterLoad} from './actions/creators';

interface IProps {
    actions: {
        roomsByFilterLoad: (filter: IRoomsRibbonFilter) => (dispatch) => void
    }

    bases: IBase[];
    rooms: IRoom[];
    filter: IRoomsRibbonFilter;
    loading: boolean;
}

class RoomsRibbon extends React.Component<IProps, void> {
    componentWillMount() {
        this.props.actions.roomsByFilterLoad(this.props.filter);
    }

    renderRoomPanel = (room: IRoom, idx: number) => {
        const base = this.props.bases.find(base => base.id === room.baseId);
        return (
            <Panel key={idx}>
                <div className='col-xs-6'>
                    {room.coverPic ? <img className="img" src={room.coverPic}/> : null}
                </div>
                <div className='col-xs-6'>
                    <Row title='База: ' content={base.name} />
                    <Row title='Город: ' content={base.city} />
                    <Row title='Название: ' content={room.name} />
                    <Row title='Площадь: ' content={room.area} />
                    <Row title='Email: ' content={base.email} />
                </div>
            </Panel>
        );
    }

    handleBaseNameFilterChange = (name: string) => {
        this.props.filter.baseName = name;
        this.forceUpdate();
    }

    handleAreaFilterChange = (area: number) => {
        this.props.filter.area = area;
        this.forceUpdate();
    }

    handleSearchClick = () => {
        this.props.actions.roomsByFilterLoad(this.props.filter);
    }

    renderFilter = (filter: IRoomsRibbonFilter) => {
        return (
            <RCard title="Фильтр">
                <div className="col-xs-6">
                    <TextInput placeholder="Название базы" value={filter.baseName} onChange={this.handleBaseNameFilterChange}/>
                </div>
                <div className="col-xs-6">
                    <TextInput placeholder="Площадь комнаты" type="number" value={filter.area} onChange={this.handleAreaFilterChange}/>
                </div>
                <SimpleButton title='Поиск' onClick={this.handleSearchClick} />
            </RCard>
        )
    }

    render() {
        const {rooms, filter} = this.props;
        return (
            <div className='col-xs-12'>
                <div className='col-xs-12'>
                    <h2>Поиск комнаты</h2>
                </div>
                <div className='col-xs-12 col-md-9 rcard'>
                    {this.renderFilter(filter)}
                </div>
                <div className='col-xs-12 col-md-9'>
                { 
                    rooms.map((room, idx) => {
                        return this.renderRoomPanel(room, idx)
                    }) 
                }
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: IReduxState) => {
    return {
        rooms: state.roomsRibbon.rooms,
        bases: state.roomsRibbon.bases,
        loading: state.roomsRibbon.loading,
        filter: state.roomsRibbon.filter
    }
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({roomsByFilterLoad}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RoomsRibbon)