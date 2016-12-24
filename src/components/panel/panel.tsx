import * as React from 'react';

import {UIContextType} from 'models';

interface IProps {
    type?: UIContextType;
}

export class Panel extends React.Component<IProps, null> {
    /*Todo add classnames */
    calculateType() {
        switch(this.props.type) {
            case UIContextType.DANGER:
                return "panel-danger";
            case UIContextType.INFO:
                return "panel-info";
            case UIContextType.SUCCESS:
                return "panel-success";
            case UIContextType.WARNING:
                return "panel-warning";
            case UIContextType.DEFAULT:
            default:
                return "panel-default";
        }
    }

    render() {
        return(
            <div className={"panel " + this.calculateType()}>
                <div className="panel-body">
                    {this.props.children}
                </div>
            </div>
        )
    }
}