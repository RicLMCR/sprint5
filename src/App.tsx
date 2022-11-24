import React, { useEffect } from "react";

import "./App.css";
import Navbar from "./components/navBar/Navbar";
import { useState } from "react";
import UserInfo from "./components/userInfo/UserInfo";
import BookTO from "./components/bookTO/BookTO";

function App() {
  //user information on login
  const [data, setData] = useState<any>("");
  const [datesBooked, setDatesBooked] = useState<any>([]);

  //booking information
  const [dateOne, setDateOne] = useState<Date>();
  const [dateTwo, setDateTwo] = useState<Date>();
  const [bookBoolean, setBookBoolean] = useState<Boolean>(false);
  const [getDay, setGetDay] = useState<string>("");

  useEffect(() => {}, [datesBooked]);

  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
      <UserInfo toAllowance={data} />
      {data ? (
        <BookTO
          dateOne={dateOne!}
          setDateOne={setDateOne}
          dateTwo={dateTwo!}
          setDateTwo={setDateTwo}
          datesBooked={datesBooked}
          setDatesBooked={setDatesBooked}
          bookBoolean={bookBoolean}
          setBookBoolean={setBookBoolean}
          data={data}
          setGetDay={setGetDay}
          getDay={getDay}
        />
      ) : null}
    </div>
  );
}

export default App;
