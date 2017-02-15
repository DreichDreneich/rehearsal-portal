import * as React from 'react';
import {IBase, UIContextType} from 'models';
import {Row, Panel, SimpleButton, RCard} from 'components';

interface IProps {
    bases: IBase[];
}

interface IState {

}

export class CabinetBaseRibbon extends React.Component<IProps, IState> {
    renderBase(base: IBase, key: any) {
        return (
            <div className="rcard col-xs-12 col-md-4">
                <RCard
                    key={key}
                    title={base.name}
                    image={base.pic} 
                    actions={[
                        <SimpleButton title="Подробнее" link={'/cabinet/base/' + base.id} />
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