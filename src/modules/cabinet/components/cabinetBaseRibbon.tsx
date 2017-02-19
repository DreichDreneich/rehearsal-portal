import * as React from 'react';
import {IBase, UIContextType} from 'models';
import {Row, Panel, SimpleButton, RCard} from 'components';

interface IProps {
    bases: IBase[];
}

interface IState {

}

export class CabinetBaseRibbon extends React.Component<IProps, IState> {
    renderBase(base: IBase, key: number) {
        return (
            <div key={key} className="rcard col-xs-12 col-md-4">
                <RCard
                    title={base.name}
                    image={base.pic} 
                    actions={[
                        <SimpleButton key="toBase" title="Подробнее" link={'/cabinet/base/' + base.id} />
                    ]}
                >
                </RCard>
            </div>
        )
    }

    render() {
        return (
            <div>
                {this.props.bases.map(this.renderBase)}
            </div>
        )
    }
}