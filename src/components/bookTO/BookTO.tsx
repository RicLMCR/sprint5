import { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, DatePicker, Space, TimePicker } from "antd";
import "antd/dist/antd.css";
import "./bookTO.css";
import { getFetch } from "../fetchRequests/FetchReq";

//Prop Interface
interface MyProps {
  dateOne: Date;
  setDateOne: any;
  dateTwo: Date;
  setDateTwo: any;
  datesBooked: any;
  setDatesBooked: any;
  bookBoolean: Boolean;
  setBookBoolean: any;
}

//booking component
const BookTO = ({
  dateOne,
  setDateOne,
  dateTwo,
  setDateTwo,
  datesBooked,
  setDatesBooked,
  bookBoolean,
  setBookBoolean,
}: MyProps) => {
  //pass date start/end to state
  const handleDate: Function = (dates: any) => {
    setDateOne(dates[0]._d);
    setDateTwo(dates[1]._d);
  };

  //calculate dates within booking range
  const getDatesInRange = (dateOne: Date, dateTwo: Date) => {
    //if both date states are true then create array
    if (dateOne && dateTwo) {
      const date = new Date(dateOne!.getTime());
      const dates: any = [];
      const newDate = new Date(date).toISOString().split("T")[0];
      let id: number = 0;

      //push object (containing date, id and hours) to temp array
      //NOTE: hours tbc
      while (date <= dateTwo!) {
        dates.push({ date: newDate, id: id });
        date.setDate(date.getDate() + 1);
        id = id + 1;
      }
      setDatesBooked(dates);
      getFetch(dates);
      return dates;
    }
  };

  //on submit
  const handleClick: Function = (e: any) => {
    e.preventDefault();
    getDatesInRange(dateOne, dateTwo);
    setBookBoolean(true);
    getFetch("Booking Your Dates");
  };

  useEffect(() => {});

  return (
    <div className="bookTOContainer">
      <h1>Book Time Off Here</h1>
      <Space>
        <DatePicker.RangePicker
          picker="date"
          onChange={(dates: any) => handleDate(dates)}
        />
        <Button onClick={(e) => handleClick(e)} type="primary">
          Submit Request
        </Button>
      </Space>
      <div className="datesList">
        {bookBoolean ? <h2>You have requested:</h2> : ""}
        {datesBooked.map((date: any) => (
          <div className="dateBookingList" key={date.id}>
            <p>
              Date {date.id} is: {date.date}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookTO;
