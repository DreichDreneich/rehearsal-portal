import * as React from 'react';

interface IProps {
    title: string;
    badge?: string;
    onChange?: () => void;
}

export class SimpleButton extends React.Component<IProps, null> {
    render() {
        return (
            <button 
                type="button" 
                className="btn btn-default"
                onClick={this.props.onChange}>
                {this.props.title}
                <span className="badge">{this.props.badge}</span>
            </button>
        )
    }
}