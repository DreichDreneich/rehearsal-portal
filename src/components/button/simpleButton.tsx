import * as React from 'react';
import {Button} from 'react-toolbox/lib/button';
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
            <Button 
                onClick={this.props.onClick}>
                {this.props.title}
            </Button>
        );

        return this.props.link ?
            <Link to={this.props.link}>{button}</Link> :
            button;
    }
}