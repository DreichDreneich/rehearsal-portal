import {IGanttChartTask} from './IGanttChartTask';

export interface IGanttChartGroup {
    id: string;
    name: string;
    renderData: () => JSX.Element;
    subgroups: IGanttChartGroup[];
    tasks: IGanttChartTask[];
}