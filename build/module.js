import {jsx as $jfvX2$jsx, jsxs as $jfvX2$jsxs, Fragment as $jfvX2$Fragment} from "react/jsx-runtime";
import {useState as $jfvX2$useState} from "react";
import {endOfMonth as $jfvX2$endOfMonth, endOfWeek as $jfvX2$endOfWeek, differenceInCalendarDays as $jfvX2$differenceInCalendarDays, isToday as $jfvX2$isToday, isSameMonth as $jfvX2$isSameMonth, getWeeksInMonth as $jfvX2$getWeeksInMonth} from "date-fns";
import {startOfMonth as $jfvX2$startOfMonth, startOfWeek as $jfvX2$startOfWeek, add as $jfvX2$add, getDate as $jfvX2$getDate, sub as $jfvX2$sub} from "date-fns/esm";
import $jfvX2$datefnsformat from "date-fns/format";






function $090815f5086f7f29$var$getDaysArray(selectedMonth, weekStartsOn) {
    const start = (0, $jfvX2$startOfMonth)(selectedMonth);
    const begginingOfWeek = (0, $jfvX2$startOfWeek)(start, {
        weekStartsOn: weekStartsOn
    });
    const end = (0, $jfvX2$endOfMonth)(selectedMonth);
    const endOfTheWeek = (0, $jfvX2$endOfWeek)(end, {
        weekStartsOn: weekStartsOn
    });
    const daysCount = (0, $jfvX2$differenceInCalendarDays)(endOfTheWeek, begginingOfWeek);
    const daysInMonth = [];
    for(let i = 0; i <= daysCount; i++){
        const currentDate = (0, $jfvX2$add)(begginingOfWeek, {
            days: i
        });
        daysInMonth.push({
            day: currentDate,
            isCurrentDate: (0, $jfvX2$isToday)(currentDate),
            isCurrentMonth: (0, $jfvX2$isSameMonth)(currentDate, selectedMonth)
        });
    }
    return daysInMonth;
}
function $090815f5086f7f29$var$getWeeks(days, currentDate, weekStartsOn) {
    const numberOfWeeks = (0, $jfvX2$getWeeksInMonth)(currentDate, {
        weekStartsOn: weekStartsOn
    });
    const month = [];
    let counter = 0;
    //weeks
    for(let j = 1; j <= numberOfWeeks; j++){
        const week = [];
        //days
        for(let i = 0; i <= 6; i++){
            week.push(days[counter]);
            counter++;
        }
        month.push(week);
    }
    return month;
}
const $090815f5086f7f29$var$defaultRenderWeekday = (weekday)=>/*#__PURE__*/ (0, $jfvX2$jsx)("td", {
        children: weekday
    }, weekday);
const $090815f5086f7f29$var$defaultRenderDay = (day)=>/*#__PURE__*/ (0, $jfvX2$jsx)("td", {
        children: (0, $jfvX2$getDate)(day.day)
    }, day.day.toISOString());
const $090815f5086f7f29$var$defaultMonthTitle = (currentDate, prevMonth, nextMonth)=>/*#__PURE__*/ (0, $jfvX2$jsxs)("div", {
        style: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ (0, $jfvX2$jsx)("button", {
                onClick: prevMonth,
                children: "prev"
            }),
            /*#__PURE__*/ (0, $jfvX2$jsx)("h3", {
                children: (0, $jfvX2$datefnsformat)(currentDate, "MMMM yyyy")
            }),
            /*#__PURE__*/ (0, $jfvX2$jsx)("button", {
                onClick: nextMonth,
                children: "next"
            })
        ]
    });
const $090815f5086f7f29$var$defaultRenderTable = (children)=>/*#__PURE__*/ (0, $jfvX2$jsx)("table", {
        children: children
    });
const $090815f5086f7f29$export$e1aef45b828286de = (p)=>{
    const weekdays = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
    ];
    const [currentDate, setCurrentDate] = (0, $jfvX2$useState)(new Date());
    const daysInMonth = $090815f5086f7f29$var$getDaysArray(currentDate, p.weekStartsOn ?? 1);
    const rows = $090815f5086f7f29$var$getWeeks(daysInMonth, currentDate, p.weekStartsOn ?? 1);
    function nextMonth() {
        setCurrentDate((0, $jfvX2$add)(currentDate, {
            months: 1
        }));
    }
    function prevMonth() {
        setCurrentDate((0, $jfvX2$sub)(currentDate, {
            months: 1
        }));
    }
    return (p.renderTable ?? $090815f5086f7f29$var$defaultRenderTable)(/*#__PURE__*/ (0, $jfvX2$jsxs)((0, $jfvX2$Fragment), {
        children: [
            /*#__PURE__*/ (0, $jfvX2$jsx)("thead", {
                children: /*#__PURE__*/ (0, $jfvX2$jsx)("tr", {
                    children: /*#__PURE__*/ (0, $jfvX2$jsx)("th", {
                        colSpan: 7,
                        children: (p.renderMonthTitle ?? $090815f5086f7f29$var$defaultMonthTitle)(currentDate, prevMonth, nextMonth)
                    })
                })
            }),
            /*#__PURE__*/ (0, $jfvX2$jsxs)("tbody", {
                children: [
                    /*#__PURE__*/ (0, $jfvX2$jsx)("tr", {
                        children: (p.weekDayLabels ?? weekdays).map(p.renderWeekday ?? $090815f5086f7f29$var$defaultRenderWeekday)
                    }),
                    rows.map((row)=>/*#__PURE__*/ (0, $jfvX2$jsx)("tr", {
                            children: row.map(p.renderDay ?? $090815f5086f7f29$var$defaultRenderDay)
                        }, row[0].day.toISOString()))
                ]
            })
        ]
    }));
};


export {$090815f5086f7f29$export$e1aef45b828286de as Calendar};
//# sourceMappingURL=module.js.map
