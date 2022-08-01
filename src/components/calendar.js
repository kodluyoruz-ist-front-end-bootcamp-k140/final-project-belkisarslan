import React, { Fragment } from 'react';

import useCalendar from '../useCalendar'

const Calendar = () => {
    const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

    const dateClickHandler = date => {
        console.log(date);
    }

    return (
        <Fragment>
            <p className='text-center'>{`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
            <table className="table">
                <thead>
                    <tr>
                        {daysShort.map(day => (
                            <th key={day}>{day}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {
                        Object.values(calendarRows).map(cols => {
                            
                            return <tr key={cols[0].date}>
                               
                                {cols.map(col => (
                                    col.date === todayFormatted
                                        ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                                            {col.value}<br/>
                                            <select style={{backgroundColor: ""}} className="select" id="floatingSelect" >
                                                <option select="true">Çalışma süresi</option>
                                                <option defaultValue="1">1 Saat</option>
                                                <option defaultValue="2">2 Saat</option>
                                                <option defaultValue="3">3 Saat</option>
                                                <option defaultValue="4">4 Saat</option>
                                                <option defaultValue="5">6 Saat</option>
                                                <option defaultValue="7">7 Saat</option>
                                            </select>
                                        </td>
                                        : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}<br/>
                                        <select className="select" id="floatingSelect" >
                                            <option select="true">Çalışma süresi</option>
                                            <option defaultValue="1">1 Saat</option>
                                            <option defaultValue="2">2 Saat</option>
                                            <option defaultValue="3">3 Saat</option>
                                            <option defaultValue="4">4 Saat</option>
                                            <option defaultValue="5">6 Saat</option>
                                            <option defaultValue="7">7 Saat</option>
                                        </select></td>
                                        
                                ))}
                            </tr>
                            
                        })
                       
                    }
                </tbody>
            </table>

            <button className="button mx-2 float-end btn btn-secondary" onClick={getPrevMonth}>Prev</button>
            <button className="button mx-2 float-end btn btn-secondary" onClick={getNextMonth}>Next</button>
        </Fragment>
    );
}

export default Calendar;