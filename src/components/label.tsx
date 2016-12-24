import * as React from 'react';

interface IProps {
    text: string;
}

export const Label = (props: IProps) : JSX.Element => {
    return <span className="label label-default">{props.text}</span>
}