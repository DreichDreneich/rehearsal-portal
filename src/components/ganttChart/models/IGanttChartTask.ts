import {IDateSpan} from 'Models';

export interface IGanttChartTask {
    name: string;
    description: string;
    times: IDateSpan[];
    renderData: () => JSX.Element;
}
