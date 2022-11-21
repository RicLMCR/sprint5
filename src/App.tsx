import React from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { useState } from "react";
import UserInfo from "./components/userInfo/UserInfo";
import BookTO from "./components/bookTO/bookDates";
import SamsComponent from "./components/samsComponent/SamsComponent";

function App() {
  const [data, setData] = useState<any>("");
  const [bookingArray, setBookingArray] = useState<any>([]);
  console.log(bookingArray, "bookingArray");


  console.log(data);
  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
      <UserInfo toAllowance={data} />
      <BookTO bookingArray={bookingArray} setBookingArray={setBookingArray} />
      {/* <SamsComponent /> */}
    </div>
  );
}

export default App;
