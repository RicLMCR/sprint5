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

  console.log(data);
  return (
    <div className="App">
      <Navbar setData={setData} data={data} />
      <UserInfo toAllowance={data} />
      <BookTO />
    </div>
  );
}

export default App;
