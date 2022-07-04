import React from "react";
import { render } from "react-dom";
import ReactDOM from 'react-dom/client';
import { Calendar } from '../src'


const App = () => {
  return (
    <>
      <h1>
        React Calendar
      </h1>
      <Calendar
        renderWeekday={(weekday) =>
          <td style={{ fontSize: "8px" }}>{weekday.toLocaleLowerCase()}</td>
        }
        renderDay={(day) =>
          <td
            key={day.day.toISOString()}
            style={{
              fontWeight: day.isCurrentDate ? "bold" : "normal",
              color: day.isCurrentMonth ? "black" : "lightgray"
            }}
          >
            {day.day.getDate()}
          </td>
        }
      />
    </>
  )
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<App />)