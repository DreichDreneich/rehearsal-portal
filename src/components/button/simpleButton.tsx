import * as React from 'react';
import {Link} from 'react-router';

interface IProps {
    title: string;
    badge?: string;
    onClick?: () => void;
    link?: string;
}

export class SimpleButton extends React.Component<IProps, null> {
    render() {
        const button = (
            <button 
                type="button" 
                className="btn btn-default"
                onClick={this.props.onClick}>
                {this.props.title}
                <span className="badge">{this.props.badge}</span>
            </button>
        );

        return this.props.link ?
            <Link to={this.props.link}>{button}</Link> :
            button;
    }
}