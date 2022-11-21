import React from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { useState } from "react";
import UserInfo from "./components/userInfo/UserInfo";
import BookTO from "./components/bookTO/BookTO";
import SamsComponent from "./components/samsComponent/SamsComponent";

function App() {
  //user information retrieval
  const [data, setData] = useState<any>("");

  //booking information
  const [dateOne, setDateOne] = useState<Date>();
  const [dateTwo, setDateTwo] = useState<Date>();
  const [datesBooked, setDatesBooked] = useState<any>([]);
  const [bookBoolean, setBookBoolean] = useState<Boolean>(false);

  console.log(data);
  console.log("dates booked:", datesBooked);

  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
      <UserInfo toAllowance={data} />
      <BookTO
        dateOne={dateOne!}
        setDateOne={setDateOne}
        dateTwo={dateTwo!}
        setDateTwo={setDateTwo}
        datesBooked={datesBooked}
        setDatesBooked={setDatesBooked}
        bookBoolean={bookBoolean}
        setBookBoolean={setBookBoolean}
      />
    </div>
  );
}

export default App;
