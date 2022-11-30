import { useState } from "react";
import { Calendar } from "antd";

const Calendar1 = () => {
  //month name, no of days, array with date objects
  const [thisMonth, setThisMonth] = useState({});

  const changeCellColour = ()=>{

  }

  return (
    <div className="calendarContainer">
      {/* <h3 className="calMonthName">This month here:{getMonthName()}</h3>
      <h3>{getDaysInCurrentMonth()}</h3> */}
      <h3>Calendar Here</h3>
      {/* {dateArray.map((date: any, index: any) => {
        <p key={index}>date here{date.id}</p>;
      })} */}

      <Calendar />
    </div>
  );
};

export default Calendar1;
