import React from "react";
import "../style/calendar.css";
import Calendar from "react-calendar";

const CalendarView = () => {
  // event handler for when a day is clicked
  const dayCLick = (v, e) => {};

  return (
    <div className="calendar">
      <Calendar onClickDay={dayCLick} />
    </div>
  );
};

export default CalendarView;
