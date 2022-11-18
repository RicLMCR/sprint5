import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker, version } from "antd";
import "antd/dist/antd.css";
import { getFetch } from "../fetchRequests/FetchReq";

const BookTO = () => {
  const [dateOne, setDateOne] = useState<Date>();
  const [dateTwo, setDateTwo] = useState<Date>();
  const [datesBooked, setDatesBooked] = useState<any>([]);

  const handleDate: Function = (dates: any) => {
    setDateOne(dates[0]._d);
    setDateTwo(dates[1]._d);
  };

  const handleClick: Function = (e: any) => {
    e.preventDefault();
    setDatesBooked([...datesBooked, { dateFrom: dateOne, dateTo: dateTwo }]);
    getFetch("Booking Your Dates");
  };

  console.log("date one ios:", dateOne);
  console.log("date two is:", dateTwo);
  console.log("catch Louis!!!:", datesBooked);

  return (
    <div>
      <h1>Book Time Off Here</h1>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker.RangePicker
          showTime
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
