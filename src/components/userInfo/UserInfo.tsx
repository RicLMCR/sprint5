import { useEffect, useState } from "react";
import { deflateSync } from "zlib";
import "./userInfo.css";

const UserInfo = ({ data }: any) => {

  // fetch holidays from booking collection
  const [holidays, setHolidays] = useState<any>([]);

  // fetch from booking collection
  const handleHolidays = async () => {
    fetch(`/api/bookings/userId/${data.userId}`)
      .then((res) => res.json())
      .then((data) => setHolidays(data));

  };



  return (
    <div className="userInfoContainer">
      {data ? (
        <div>
          <h1>User Holiday Info Here</h1>
          <h2>Total Time Off Allowance (hours)</h2>
          <p>{data.timeOff.PTO.allowance}</p>

          <h2>Time Off Available</h2>
          <p>{data.timeOff.PTO.available}</p>

          <h2>Hours booked</h2>
          <p>{data.timeOff.PTO.booked}</p>
          <input className="button-nav" type="submit" value="Holidays" onClick={handleHolidays} />

          {holidays.map(({ dates: { date } }: any) => {
            console.log(holidays);
            return (
              <div>
                <p>{date}</p>
              </div>
            )
          })}



        </div>
      ) : (
        <div>
          {" "}
          <h2>Sign in</h2>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
