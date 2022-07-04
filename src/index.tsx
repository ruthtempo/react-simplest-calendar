import React, { useState } from "react"
import { differenceInCalendarDays, endOfMonth, endOfWeek, getWeeksInMonth, isSameDay, isSameMonth, isToday } from "date-fns";
import { add, startOfMonth, sub, getDate, startOfWeek } from "date-fns/esm";
import format from "date-fns/format";

interface CalendarRecord {
  day: Date,
  isCurrentDate: boolean,
  isCurrentMonth: boolean
}

function getDaysArray(selectedMonth: Date): CalendarRecord[] {
  const start = startOfMonth(selectedMonth)
  const begginingOfWeek = startOfWeek(start, { weekStartsOn: 1 })

  const end = endOfMonth(selectedMonth)
  const endOfTheWeek = endOfWeek(end, { weekStartsOn: 1 })

  const daysCount = differenceInCalendarDays(endOfTheWeek, begginingOfWeek)
  const daysInMonth: CalendarRecord[] = []

  for (let i = 0; i <= daysCount; i++) {
    const currentDate = add(begginingOfWeek, { days: i })

    daysInMonth.push({
      day: currentDate,
      isCurrentDate: isToday(currentDate),
      isCurrentMonth: isSameMonth(currentDate, selectedMonth)
    })
  }
  return daysInMonth
}

function getWeeks(days: CalendarRecord[], currentDate: Date): CalendarRecord[][] {
  const numberOfWeeks = getWeeksInMonth(currentDate, { weekStartsOn: 1 })
  const month: CalendarRecord[][] = []
  let counter = 0
  //weeks
  for (let j = 1; j <= numberOfWeeks; j++) {
    const week: CalendarRecord[] = []

    //days
    for (let i = 0; i <= 6; i++) {
      week.push(days[counter])
      counter++
    };
    month.push(week)
  }
  return month
}


const defaultRenderWeekday = (weekday: string): JSX.Element =>
  <td key={weekday}>{weekday}</td>

const defaultRenderDay = (day: CalendarRecord): JSX.Element =>
  <td key={day.day.toISOString()}>
    {getDate(day.day)}
  </td>

export const Calendar = (p: {
  renderWeekday?: typeof defaultRenderWeekday,
  renderDay?: typeof defaultRenderDay,
}) => {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]

  const [currentDate, setCurrentDate] = useState(new Date())
  const daysInMonth = getDaysArray(currentDate)
  const rows = getWeeks(daysInMonth, currentDate)

  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }
  return (
    <table>
      <thead>
        <tr>
          <th colSpan={7}>
            <div >
              <button onClick={prevMonth}>prev</button>
              {format(currentDate, 'MMMM yyyy')}
              <button onClick={nextMonth} >next</button>
            </div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {weekdays.map(p.renderWeekday ?? defaultRenderWeekday)}
          {/* <td key={weekday}><small>{weekday}</small></td> */}
        </tr>
        {rows.map(row => (
          <tr key={row[0].day.toISOString()} >
            {row.map(p.renderDay ?? defaultRenderDay)}
          </tr>
        ))}
      </tbody>
    </table>

  )
}
