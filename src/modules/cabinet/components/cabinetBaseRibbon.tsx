import * as React from 'react';
import {IBase, UIContextType} from 'models';
import {Row, Panel, SimpleButton} from 'components';

interface IProps {
    bases: IBase[];
}

interface IState {

}

export class CabinetBaseRibbon extends React.Component<IProps, IState> {
    renderBase(base: IBase, key: any) {
        return (
            <Panel key={key} type={UIContextType.INFO}>
                <div className="col-md-4">
                    <img className="media-object img" src={base.pic}/>
                </div>
                <div className="col-md-8">
                    <Row title="Название" content={base.name}/>
                    <Row title="Email" content={base.email}/>
                </div>
                <div className="col-md-12">
                    <SimpleButton title="Подробнее" link={'/cabinet/base/' + base.id} />
                </div>
            </Panel>
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