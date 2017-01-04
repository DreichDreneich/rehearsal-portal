import * as React from 'react';

interface IProps {
    title: string;
    content: JSX.Element[] | string | number;
}

export class Row extends React.Component<IProps, null> {
    render() {
        return (
            <div className="row">
                <div className="col-md-5">
                    {this.props.title}
                </div>  
                <div className="col-md-7">
                    {this.props.content}
                </div>
            </div>
        );
    }
}