import * as React from 'react';
import {IDateSpan} from 'models';
import * as moment from 'moment';

interface IProps {
    timeSpan: IDateSpan;
}

interface IState {
    dates: moment.Moment[];
}

export class GanttTimes extends React.Component<IProps, IState> {

    constructor(props) {
        super(props);

        const {from, to} = this.props.timeSpan;
        this.state = {
            dates: this.enumerateDaysBetweenDates(moment(from), moment(to))
        }
    }

//ToDO вынести в хелпер
    enumerateDaysBetweenDates = (startDate: moment.Moment, endDate: moment.Moment): moment.Moment[] => {
        var dates: moment.Moment[] = [startDate];

        let currDate = startDate.clone().startOf('day');
        let lastDate = endDate.clone().startOf('day');

        while(currDate.add('days', 1).diff(lastDate) < 0) {
            dates.push(currDate.clone());
        }

        dates.push(endDate);

        return dates;
    };

    renderDates = () => {
        const {dates} = this.state;

        let days = dates.map((date, idx) => {
            return (
                <div className="div-table-col-day" key={idx}>
                    {date.format('L')}
                </div>
            )
        })

        return (
            <div className="div-table-row">
                {days}
            </div>
        )
    }

    renderHours = () => {
        const {dates} = this.state;
        let hoursArray = [];
        for(let i = 0; i < dates.length; i++) {
            hoursArray.push(...Array(24).keys());
        }

        return (
            <div className="div-table-row">
                {hoursArray.map((hour, idx) => {
                    return (
                        <div className="div-table-col-hour" key={idx}>
                            {hour}
                        </div>
                    )
                })}
            </div>
        )
    }

    render() {
        return(
            <div className="col-xs-12 div-table gantt-time-table">
                {this.renderDates()}
                {this.renderHours()}
            </div>
        )
    }
}