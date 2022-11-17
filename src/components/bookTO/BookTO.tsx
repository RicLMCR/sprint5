import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker, version } from "antd";
import "antd/dist/antd.css";

const BookTO = () => {
  const [dateOne, setDateOne] = useState<any>();
  const [dateTwo, setDateTwo] = useState<any>();
  const [datesBooked, setDatesBooked]=useState<any>([]);

  const handleDate = (e: any) => {
    setDateOne(e[0]._d);
    setDateTwo(e[1]._d);
  };

  const handleClick = (e: any)=>{
    e.preventDefault();
    setDatesBooked([...datesBooked, {dateFrom:dateOne, dateTo:dateTwo}])
  }

  console.log("date one ios:", dateOne);
  console.log("date two is:", dateTwo);
  console.log("catch Louis!!!:", datesBooked);


  return (
    <div>
      <h1>Book Time Off Here</h1>
      <h1>antd version: {version}</h1>
      <Space>
        <DatePicker.RangePicker
          picker="date"
          onChange={(dates: any) => handleDate(dates)}
        />
        {/* <DatePicker onChange={(date:any)=>handleDate(date._d)}/> */}
        {/* <TimePicker onChange={(time:any)=>handleTime(time)}/> */}
        <Button onClick={(e)=>handleClick(e)}type="primary">Primary Button</Button>
      </Space>
    </div>
  );
};

export default BookTO;
