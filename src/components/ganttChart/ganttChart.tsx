import * as React from 'react';
import {IDateSpan} from 'models';
import {IGanttChartModel} from './models';
import {GanttTimes} from './ganttTimes';
import * as classNames from 'classnames';
import { Button } from 'react-toolbox/lib/button';

//Сделать отдельную утилиту
import * as moment from 'moment';

interface IProps {
    model: IGanttChartModel;
    timeSpan: IDateSpan;
}

interface IState {

}

let hours = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
let rooms = ['one', 'two', 'three'];

let groupsData : IGroup[] = [
{
    id: "fsdf",
    name: "Комната 1",
    tasks: [
        {
            dates: {from: new Date(2015, 11, 31, 3), to: new Date(2016, 1, 1, 6)},
            subject: {                
                id: "erfref",
                label: "METALLICA"
            }
        },
        {
            dates: {from: new Date(2016, 1, 1, 14), to: new Date(2016, 1, 1, 17)},
            subject: {                
                id: "erfref",
                label: "METALLICA"
            }
        },
        {
            dates: {from: new Date(2016, 1, 1, 11), to: new Date(2016, 1, 1, 13)},
            subject: {                
                id: "erfref",
                label: "Стас Михайлов"
            }
        },
        {
            dates: {from: new Date(2016, 1, 1, 22), to: new Date(2016, 1, 2, 5)},
            subject: {                
                id: "erfref",
                label: "Лесоповал"
            }
        }
    ]
},
{
    id: "fsdf",
    name: "Комната 2",
    tasks: [{
        dates: {from: new Date(2016, 1, 1, 9), to: new Date(2016, 1, 1, 14)},
        subject: {                
            id: "57878",
            label: "DEEP PURPLE"
        }
    }]
}

]

export class GanttChart extends React.Component<void, IState> {
    
    render() {
        return (
            <div className="overflow-auto col-xs-12">
            <Button />
                <TableChart dateSpan={{from: new Date(2016, 1, 1), to: new Date(2016, 1, 1)}}/>
            </div>
        )
    }
}

interface ITableChartProps {
    dateSpan: IDateSpan;
}

class TableChart extends React.Component<ITableChartProps, void> {


    render() {
        const {dateSpan: {from, to}} = this.props;
        const dates = DateUtils.enumerateDaysBetweenDates(from, to);

        return (
            <table className="table table-bordered">
                <TableHeader dates={dates} />
                <TableBody dates={dates} groups={groupsData}/>
            </table>
            
        )
    }
}

interface ITableHeaderProps {
    dates: moment.Moment[];
}

class TableHeader extends React.Component<ITableHeaderProps, void> {
    render() {
        const {dates} = this.props;

        return (
            <thead>
                <tr>
                    <td rowSpan={2} className="text-center">
                        Rooms
                    </td>
                    {
                        dates.map((date, i) => {
                            return (
                                <td className="text-center" colSpan={23} key={i}>
                                    {date.format('L')}
                                </td>
                            )
                        })
                    } 
                </tr>
                <tr>
                    {
                        dates.map((date) => {
                            return (
                                hours.map((h, i) => {
                                    return(
                                        <td className="text-center" key={i}>
                                            {h}
                                        </td>
                                    )
                                })
                            )
                        })
                    }
                </tr>

            </thead>
        )
    }
}

interface ITableBodyProps {
    dates: moment.Moment[];
    groups: IGroup[];
}

//Служебный интерфейс, описывает группу, которая забила репу и кол-во часов в матрице часов.
interface ISubjectWithWidth {
    subject: ITaskSubject;
    hours: number;
}

const Utils = {
    generateColor() {
        return '#'+Math.floor(Math.random()*16777215).toString(16);
    }
}

class TableBody extends React.Component<ITableBodyProps, void> {

    getTasksMatrix = (tasks: ITask[]) : ITaskSubject[] => {
        const tableDates = this.props.dates;
        let matrix = [];

        tableDates.map(td => {
            hours.map(h => {
                let task = tasks.find(t => {
                    const tDates = t.dates;
                    let dateWithHour = td.clone().hour(h)
                    return dateWithHour.isBetween(tDates.from, tDates.to, null, "[)");
                })

                matrix.push(task && task.subject);
            })
        });

        return matrix;
    }

    getMatrixWithWidth = (matrix: ITaskSubject[]) => {
        let matrixWithHours : ISubjectWithWidth[] = [];

        for(let i = 0; i < matrix.length; i++) {
            if(i === 0 || !matrix[i] || !matrix[i-1]) {
                matrixWithHours.push({hours: 1, subject: matrix[i]})
                continue;
            }

            if(matrix[i].id === matrix[i-1].id) {
                let prev = matrixWithHours.pop();
                prev.hours = prev.hours + 1;
                matrixWithHours.push(prev);
            }
        }

        return matrixWithHours;
    }


    renderRow = (group: IGroup, key: any) => {
        const {id, name, tasks} = group;
        
        const matrix = this.getTasksMatrix(tasks);
        const matrixWithHours = this.getMatrixWithWidth(matrix);
        return(
            <tr key={key}>
                <td className="text-center">
                    {name}
                </td>
                {
                    matrixWithHours.map((m, idx) =>
                        <td key={idx} colSpan={m.hours}>
                            {
                                m && m.subject && 
                                <div className="text-center gantt-task" style={{backgroundColor: Utils.generateColor()}}>
                                    {m.subject.label}
                                </div>
                            }
                        </td>
                    )
                }
            </tr>
        )
    }

    render() {
        const {dates, groups} = this.props;
        return (
            <tbody>
                {
                    groups.map((group, idx) => {
                        return this.renderRow(group, idx)
                    })
                }
            </tbody>
        )
    }
}



export const DateUtils = {
    enumerateDaysBetweenDates: (from: Date, to: Date): moment.Moment[] => {
        const startDate = moment(from);
        const endDate = moment(to);
        var dates: moment.Moment[] = [startDate];

        let currDate = startDate.clone().startOf('day');
        let lastDate = endDate.clone().startOf('day');

        while(currDate.add('days', 1).diff(lastDate) < 0) {
            dates.push(currDate.clone());
        }

        dates.push(endDate);

        return dates;
    },

    dateSpanToMoment: (span: IDateSpan): {from: moment.Moment, to: moment.Moment} => {
        return {from: moment(span.from), to: moment(span.to)}
    }
}
interface IGroup {
    id: string;
    name: string;
    render?: JSX.Element;
    tasks: ITask[];
}

interface ITaskSubject {
    id: string;
    label: string;
    render?: JSX.Element;
}

interface ITask {
    //С какого по какое забронировали комнату
    dates: IDateSpan;
    subject: ITaskSubject;
} 
