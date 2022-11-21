import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker, version } from "antd";
import "antd/dist/antd.css";
import { getFetch } from "../fetchRequests/FetchReq";

const BookTO = () => {
  const [dateStart, setDateStart] = useState<Date>();
  const [timeStart, setTimeStart] = useState<Date>();
  const [dateEnd, setDateEnd] = useState<Date>();
  const [timeEnd, setTimeEnd] = useState<Date>();
  const [datesBooked, setDatesBooked] = useState<any>([]);

  //store dates/times in states
  const handleDate: Function = (dates: any) => {
    //time start
    const dateToTimeStart = dates[0]._d;
    const timeStart = dateToTimeStart.toString();
    setTimeStart(timeStart.slice(16, 24));
    //date from
    setDateStart(dates[0]._d);

    //time end
    const dateToTimeEnd = dates[1]._d;
    const timeEnd = dateToTimeEnd.toString();
    setTimeEnd(timeEnd.slice(16, 24));
    //date to
    setDateEnd(dates[1]._d);
  };

  //combine all time/dates into object and send
  const handleClick: Function = (e: any) => {
    e.preventDefault();
    setDatesBooked([
      ...datesBooked,
      {
        dateFrom: dateStart,
        timeFrom: timeStart,
        dateTo: dateEnd,
        timeTo: timeEnd,
      },
    ]);
    getFetch("Booking Your Dates");
  };

  //state populated confirmation
  // console.log("time Start!!!:", timeStart);
  // console.log("time End:", timeEnd);
  console.log("date one ios:", dateStart);
  console.log("date two is:", dateEnd);
  console.log("Backend request. Catch Louis!!!:", datesBooked);

  return (
    <div>
      <h1>Book Time Off Here</h1>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker.RangePicker
          // showTime
          picker="date"
          onChange={(dates: any) => handleDate(dates)}
        />
        <Button onClick={(e) => handleClick(e)} type="primary">
          Submit Request
        </Button>
        
      </Space>
    </div>
  );
};

export default BookTO;
