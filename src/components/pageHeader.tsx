import * as React from 'react';
import {SimpleButton} from 'components';

interface IAction {
    title: string;
    enabled: () => boolean;
    link?: string;
    onClick?: () => void;
}

interface IPageHeaderProps {
    title: string;
    subTitle?: string;
    actions?: IAction[];
}

export class PageHeader extends React.Component<IPageHeaderProps, void> {
    renderAction = (action: IAction, key: any) => {
        return (
            <SimpleButton 
                title={action.title}
                link={action.link}
                onClick={action.onClick}
                key={key}
            />
        )
    }

    render() {
        const {title, subTitle, actions} = this.props;


        return (
            <div className="col-xs-12 page-custom-header">
                <div className="col-xs-5">
                    <div className="col-xs-12 page-title">
                        <h2>{title}</h2>
                    </div>
                    {subTitle && 
                    <div className="col-xs-12">
                        <h2>{subTitle}</h2>
                    </div>}
                </div>
                <div className="col-xs-7 page-actions">
                    {
                        actions && actions.filter(a => a.enabled()).map((a, idx) => this.renderAction(a, idx))
                    }
                </div>
            </div>
        )
    }
}