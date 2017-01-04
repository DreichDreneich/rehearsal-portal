import * as React from 'react';

interface IGunttChartData {

}

interface IChartTask {
    name: string;
    description: string;
    times: IDateSpan[];
}

interface IDateSpan {
    from: Date;
    to: Date;
}

interface IProps {
}

interface IState {

}

export class GunttChart extends React.Component<IProps, IState> {

}