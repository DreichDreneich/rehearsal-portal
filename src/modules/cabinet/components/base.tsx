import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch, Action} from 'redux';

import {IBase, IRoom} from 'models';
import {Row} from 'components';

import {baseInfoLoad} from '../actions/creators';

interface IProps {
    base: IBase;
    rooms: IRoom[];
    actions: {baseInfoLoad: (string) => any}
    //Приходит из роутера
    params: {
        baseId: string    
    };
    dispatch: any;
}

interface IState {

}

export class Base extends React.Component<IProps, IState> {
    componentWillMount() {
        this.props.dispatch(baseInfoLoad(this.props.params.baseId));
    }

    render() {
        debugger;
        return (
            <div>
                {!this.props.base || this.props.rooms ? <h2>Loading</h2> :
                    this.props.base.name}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        base: state.cabinet.currentBase.base,
        rooms: state.cabinet.currentBase.rooms
    }
}

export default connect(mapStateToProps)(Base)