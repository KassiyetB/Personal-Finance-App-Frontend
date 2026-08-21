import Table from "@/components/ui/Table/Table"
import type { ReactNode } from "react";
import  styles  from "./Calendar.module.css"

const Calendar = () => {

    const DAYS = [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
    ];

    const getCalendarData = (year: number, month: number) => {
        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(year, month + 1, 0).getDate();

        // JS: Sunday = 0, Monday = 1, ...
        // Convert to: Monday = 0, Sunday = 6
        const startDay = (firstDay.getDay() + 6) % 7;

        const weeks: Record<string, ReactNode>[] = [];

        let currentDay = 1;

        // 5 or 6 weeks depending on the month
        const weekCount = Math.ceil((startDay + daysInMonth) / 7);

        for (let week = 0; week < weekCount; week++) {
            const row: Record<string, ReactNode> = {};

            DAYS.forEach((day, index) => {
            const position = week * 7 + index;

            if (position < startDay || currentDay > daysInMonth) {
                row[day] = null;
            } else {
                row[day] = (
                    <span className={styles.day}>
                    {currentDay}
                    </span>
                );
                currentDay++;
            }
            });

            weeks.push(row);
        }

        return weeks;
    };

    const getMonthName = (month: number): string => {
        return new Date(2000, month, 1).toLocaleString("en-US", {
            month: "long",
        });
    };

    const data = getCalendarData(2026, 7);

    return (
        <div className={styles.calendar}>
            <p className={styles.header}>{`${getMonthName(7)} ${2026}`}</p>
            <Table columns={DAYS} data={data}/>
        </div>
    )
}

export default Calendar