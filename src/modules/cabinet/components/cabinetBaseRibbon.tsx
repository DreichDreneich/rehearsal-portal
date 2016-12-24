import * as React from 'react';
import {IBase} from 'models';
import {Row} from 'components';

interface IProps {
    bases: IBase[];
}

interface IState {

}

export class CabinetBaseRibbon extends React.Component<IProps, IState> {
    renderBase(base: IBase, key: any) {
        return (
            <div key={key} className="panel panel-default">
                <div className="panel-body">
                    <div className="col-md-4">
                        <img className="media-object img" src={base.pic}/>
                    </div>
                    <div className="col-md-8">
                        <Row title="Название" content={base.name}/>
                        <Row title="Email" content={base.email}/>
                    </div>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.bases.map((base, idx) => {
                    return this.renderBase(base, idx);
                })}
            </div>
        )
    }
}