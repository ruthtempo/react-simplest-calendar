var $gS6ko$reactjsxruntime = require("react/jsx-runtime");
var $gS6ko$react = require("react");
var $gS6ko$datefns = require("date-fns");
var $gS6ko$datefnsesm = require("date-fns/esm");
var $gS6ko$datefnsformat = require("date-fns/format");

function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Calendar", () => $9233cea927cb9637$export$e1aef45b828286de);





function $9233cea927cb9637$var$getDaysArray(selectedMonth, weekStartsOn) {
    const start = (0, $gS6ko$datefnsesm.startOfMonth)(selectedMonth);
    const begginingOfWeek = (0, $gS6ko$datefnsesm.startOfWeek)(start, {
        weekStartsOn: weekStartsOn
    });
    const end = (0, $gS6ko$datefns.endOfMonth)(selectedMonth);
    const endOfTheWeek = (0, $gS6ko$datefns.endOfWeek)(end, {
        weekStartsOn: weekStartsOn
    });
    const daysCount = (0, $gS6ko$datefns.differenceInCalendarDays)(endOfTheWeek, begginingOfWeek);
    const daysInMonth = [];
    for(let i = 0; i <= daysCount; i++){
        const currentDate = (0, $gS6ko$datefnsesm.add)(begginingOfWeek, {
            days: i
        });
        daysInMonth.push({
            day: currentDate,
            isCurrentDate: (0, $gS6ko$datefns.isToday)(currentDate),
            isCurrentMonth: (0, $gS6ko$datefns.isSameMonth)(currentDate, selectedMonth)
        });
    }
    return daysInMonth;
}
function $9233cea927cb9637$var$getWeeks(days, currentDate, weekStartsOn) {
    const numberOfWeeks = (0, $gS6ko$datefns.getWeeksInMonth)(currentDate, {
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
const $9233cea927cb9637$var$defaultRenderWeekday = (weekday)=>/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("td", {
        children: weekday
    }, weekday);
const $9233cea927cb9637$var$defaultRenderDay = (day)=>/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("td", {
        children: (0, $gS6ko$datefnsesm.getDate)(day.day)
    }, day.day.toISOString());
const $9233cea927cb9637$var$defaultMonthTitle = (currentDate, prevMonth, nextMonth)=>/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsxs)("div", {
        style: {
            display: "flex"
        },
        children: [
            /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("button", {
                onClick: prevMonth,
                children: "prev"
            }),
            /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("h3", {
                children: (0, ($parcel$interopDefault($gS6ko$datefnsformat)))(currentDate, "MMMM yyyy")
            }),
            /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("button", {
                onClick: nextMonth,
                children: "next"
            })
        ]
    });
const $9233cea927cb9637$var$defaultRenderTable = (children)=>/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("table", {
        children: children
    });
const $9233cea927cb9637$export$e1aef45b828286de = (p)=>{
    const weekdays = [
        "MON",
        "TUE",
        "WED",
        "THU",
        "FRI",
        "SAT",
        "SUN"
    ];
    const [currentDate, setCurrentDate] = (0, $gS6ko$react.useState)(new Date());
    const daysInMonth = $9233cea927cb9637$var$getDaysArray(currentDate, p.weekStartsOn ?? 1);
    const rows = $9233cea927cb9637$var$getWeeks(daysInMonth, currentDate, p.weekStartsOn ?? 1);
    function nextMonth() {
        setCurrentDate((0, $gS6ko$datefnsesm.add)(currentDate, {
            months: 1
        }));
    }
    function prevMonth() {
        setCurrentDate((0, $gS6ko$datefnsesm.sub)(currentDate, {
            months: 1
        }));
    }
    return (p.renderTable ?? $9233cea927cb9637$var$defaultRenderTable)(/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsxs)((0, $gS6ko$reactjsxruntime.Fragment), {
        children: [
            /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("thead", {
                children: /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("tr", {
                    children: /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("th", {
                        colSpan: 7,
                        children: (p.renderMonthTitle ?? $9233cea927cb9637$var$defaultMonthTitle)(currentDate, prevMonth, nextMonth)
                    })
                })
            }),
            /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsxs)("tbody", {
                children: [
                    /*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("tr", {
                        children: (p.weekDayLabels ?? weekdays).map(p.renderWeekday ?? $9233cea927cb9637$var$defaultRenderWeekday)
                    }),
                    rows.map((row)=>/*#__PURE__*/ (0, $gS6ko$reactjsxruntime.jsx)("tr", {
                            children: row.map(p.renderDay ?? $9233cea927cb9637$var$defaultRenderDay)
                        }, row[0].day.toISOString()))
                ]
            })
        ]
    }));
};


//# sourceMappingURL=main.js.map
