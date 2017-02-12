import * as React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

interface IRCardProps {
    title: string;
    subtitle?: string;
    image?: string | JSX.Element;
    data?: string | JSX.Element;
    className?: string;
    actions?: JSX.Element[];
    children?: JSX.Element[];

    raised?: boolean;
}

export class RCard extends React.Component<IRCardProps, void> {
    render() {
        const {data, image, subtitle, title, className, actions, children, raised=true} = this.props;
        return (
            <div className={className}>
                <Card raised={raised}>
                    {image && 
                    <CardMedia
                        aspectRatio="wide"
                        image={image}
                    />
                    }
                    
                    <CardTitle
                        title={title}
                        subtitle={subtitle}
                    />
                    <CardText>{children || data}</CardText>
                    <CardActions>
                        {actions}
                    </CardActions>
                </Card>
            </div>
        )
    }
}
