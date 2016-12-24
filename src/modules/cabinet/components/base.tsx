import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators, Dispatch, Action} from 'redux';

import {IBase, IRoom} from 'models';
import {Row} from 'components';

import {baseInfoLoad} from '../actions/creators';

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
    debugger;
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