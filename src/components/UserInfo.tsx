import { useEffect, useState } from "react";
import "./css/userInfo.css";

const UserInfo = ({ toAllowance }: any) => {


  if (toAllowance) {
    //   setAllowance(toAllowance.timeOff.PTO.allowance);
    console.log("sick days are:", toAllowance.timeOff.PTO.allowance);
    //   console.log(allowance);
  } else {
    console.log("still waiting");
  }


  return (
    <div className="userInfoContainer">
        {
            toAllowance ? 
            <div>
                <h1>User Holiday Info Here</h1>
                <h2>Total Time Off Allowance (hours)</h2>
                <p>{toAllowance.timeOff.PTO.allowance}</p>

                <h2>Time Off Available</h2>
                <p>{toAllowance.timeOff.PTO.available}</p>
            </div>
         : <div> <h2>Sign in</h2></div>
        }
    </div>
  );
};

export default UserInfo;
