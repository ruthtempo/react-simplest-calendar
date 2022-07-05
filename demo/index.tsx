import { format, weeksToDays } from "date-fns";
import React from "react";
import ReactDOM from 'react-dom/client';
import { Calendar } from '../src'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'

const App = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1 className="text-center py-4">
        React Simple Calendar
      </h1>
      <Calendar
        weekStartsOn={1}
        weekDayLabels={["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"]}
        renderWeekday={(weekday) =>
          <td key={weekday} className="text-end">{weekday}</td>
        }
        renderDay={(day) =>
          <td
            key={day.day.toISOString()}
            className={`${day.isCurrentDate ? "fw-bold" : ""} text-end ${!day.isCurrentMonth ? "text-muted" : ""} `}
          >
            {day.day.getDate()}
          </td>
        }
        renderMonthTitle={(currentDate, prevMonth, nextMonth) => (
          <div className="d-flex justify-content-between">
            <Button onClick={prevMonth}>prev</Button>
            <h3>{format(currentDate, 'MMMM yyyy')}</h3>
            <Button onClick={nextMonth} >next</Button>
          </div>
        )}
        renderTable={(children) =>
          <Table style={{ width: 500 }}>
            {children}
          </Table>
        }
      />
    </div>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />)
