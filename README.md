# react-simple-calendar

## Peer Dependencies

Requires [React](https://reactjs.org/) and [date-fns](https://date-fns.org/)
## Props


| name     | type    | description | default |
|----------|---------|-------------|--------|
| `weekStartsOn` | `number` | starting day of the week (`0`=Sun to `6`=Sat)| `1` |
| `weekDayLabels` | `string[]` | weekday labels | `["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]` |
| `renderTable` | `(children: JSX.Element) => JSX.Element` | renders calendar table | `(children) => <table> {children} </table>` |
| `renderMonthTitle`| `(currentDate: Date, prevMonth: () => void, nextMonth: () => void) => JSX.Element`| renders month title with prev/next buttons | `(currentDate, prevMonth, nextMonth) => <div> <button onClick={prevMonth}>prev</button><h3>{format(currentDate, 'MMMM yyyy')}</h3><button onClick={nextMonth} >next</button></div>`|
| `renderDay` | `(day: CalendarRecord) => JSX.Element`| renders days of the month | `(day) => <td key={day.day.toISOString()}>{getDate(day.day)}</td>`|
| `renderWeekday` | `(weekday: string)=> JSX.Element`| renders weekdays | `(weekday)=><td key={weekday}>{weekday}</td>`
