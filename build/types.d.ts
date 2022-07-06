type WeekStartsOn = 0 | 1 | 2 | 3 | 4 | 5 | 6;
interface CalendarRecord {
    day: Date;
    isCurrentDate: boolean;
    isCurrentMonth: boolean;
}
declare const defaultRenderWeekday: (weekday: string) => JSX.Element;
declare const defaultRenderDay: (day: CalendarRecord) => JSX.Element;
declare const defaultMonthTitle: (currentDate: Date, prevMonth: () => void, nextMonth: () => void) => JSX.Element;
declare const defaultRenderTable: (children: JSX.Element) => JSX.Element;
export const Calendar: (p: {
    renderWeekday?: typeof defaultRenderWeekday;
    renderDay?: typeof defaultRenderDay;
    renderMonthTitle?: typeof defaultMonthTitle;
    renderTable?: typeof defaultRenderTable;
    weekStartsOn?: WeekStartsOn;
    weekDayLabels?: string[];
}) => JSX.Element;

//# sourceMappingURL=types.d.ts.map
