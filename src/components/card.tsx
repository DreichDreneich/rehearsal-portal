import * as React from 'react';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';
import {Button} from 'react-toolbox/lib/button';

const dummyText = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.';

interface IRCardProps {
    title: string;
    subtitle?: string;
    image?: string | JSX.Element;
    data: string | JSX.Element;
    className?: string;
}

export class RCard extends React.Component<IRCardProps, void> {
    render() {
        const {data, image, subtitle, title, className} = this.props;
        return (
            <div className={className}>
                <Card>
                    <CardMedia
                        aspectRatio="wide"
                        image={image}
                    />
                    <CardTitle
                        title={title}
                        subtitle={subtitle}
                    />
                    <CardText>{data}</CardText>
                    <CardActions>
                        <Button label="Action 1" />
                        <Button label="Action 2" />
                    </CardActions>
                </Card>
            </div>
        )
    }
}
