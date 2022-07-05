import React, { useState } from "react"
import { differenceInCalendarDays, endOfMonth, endOfWeek, getWeeksInMonth, isSameDay, isSameMonth, isToday } from "date-fns";
import { add, startOfMonth, sub, getDate, startOfWeek } from "date-fns/esm";
import format from "date-fns/format";

type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6

interface CalendarRecord {
  day: Date,
  isCurrentDate: boolean,
  isCurrentMonth: boolean
}

function getDaysArray(selectedMonth: Date, weekStartsOn: WeekStartsOn): CalendarRecord[] {
  const start = startOfMonth(selectedMonth)
  const begginingOfWeek = startOfWeek(start, { weekStartsOn })

  const end = endOfMonth(selectedMonth)
  const endOfTheWeek = endOfWeek(end, { weekStartsOn })

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

function getWeeks(
  days: CalendarRecord[],
  currentDate: Date,
  weekStartsOn: WeekStartsOn
): CalendarRecord[][] {
  const numberOfWeeks = getWeeksInMonth(currentDate, { weekStartsOn })
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

const defaultMonthTitle = (
  currentDate: Date,
  prevMonth: () => void,
  nextMonth: () => void,
): JSX.Element => (
  <div style={{ display: 'flex' }}>
    <button onClick={prevMonth}>prev</button>
    <h3>{format(currentDate, 'MMMM yyyy')}</h3>
    <button onClick={nextMonth} >next</button>
  </div>
)

const defaultRenderTable = (children: JSX.Element) =>
  <table>
    {children}
  </table>

export const Calendar = (p: {
  renderWeekday?: typeof defaultRenderWeekday,
  renderDay?: typeof defaultRenderDay,
  renderMonthTitle?: typeof defaultMonthTitle,
  renderTable?: typeof defaultRenderTable,
  weekStartsOn?: WeekStartsOn,
  weekDayLabels?: string[]
}) => {
  const weekdays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];

  const [currentDate, setCurrentDate] = useState(new Date())
  const daysInMonth = getDaysArray(currentDate, p.weekStartsOn ?? 1)
  const rows = getWeeks(daysInMonth, currentDate, p.weekStartsOn ?? 1)

  function nextMonth() {
    setCurrentDate(add(currentDate, { months: 1 }))
  }

  function prevMonth() {
    setCurrentDate(sub(currentDate, { months: 1 }))
  }

  return (
    (p.renderTable ?? defaultRenderTable)(
      <>
        <thead>
          <tr>
            <th colSpan={7}>
              {(p.renderMonthTitle ?? defaultMonthTitle)(currentDate, prevMonth, nextMonth)}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {(p.weekDayLabels ?? weekdays).map(p.renderWeekday ?? defaultRenderWeekday)}
            {/* <td key={weekday}><small>{weekday}</small></td> */}
          </tr>
          {rows.map(row => (
            <tr key={row[0].day.toISOString()} >
              {row.map(p.renderDay ?? defaultRenderDay)}
              {/* {row.map(day => (p.renderDay ?? defaultRenderDay)(day))} */}
            </tr>
          ))}
        </tbody>
      </>
    )
  )
}
