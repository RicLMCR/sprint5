//! Imports
import "../App.css";
import { useState } from "react";

//! Props Interface
interface MyProps {
  handleLogOut: any;
  data: any;
  setData: React.Dispatch<React.SetStateAction<string>>;
  setHandleModal: React.Dispatch<React.SetStateAction<boolean>>;
  handleModal: boolean;
}

//! Function
const NavModal = ({
  handleLogOut,
  data,
  setData,
  setHandleModal,
  handleModal,
}: MyProps): any => {
  // States
  const [userName, setUsername] = useState<string>("");
  const [userPassword, setPassword] = useState<string>("");

  //Submit Function
  const handleSubmit = (e: any) => {
    e.preventDefault();
    fetch(`/api/users/userName/${userName}/userPassword/${userPassword}`)
      .then((res) => res.json())
      .then((data) => setData(data));
    setUsername("");
  };

  return handleModal ? (
    <div className="modal">
      <form onSubmit={handleSubmit}>
        {data ? (
          <div>
            <button onClick={handleLogOut}>Log Out</button>
          </div>
        ) : (
          <div className="form-group">
            <label>
              <input
                placeholder="User name"
                className="input-nav"
                type="text"
                value={userName}
                onChange={(event) => setUsername(event.target.value)}
              />
            </label>
            <label>
              <input
                placeholder="Password"
                className="input-nav"
                type="password"
                value={userPassword}
                onChange={(event) => setPassword(event.target.value)}
              />
            </label>
            <input className="button-nav" type="submit" value="Log in" />
            <input className="button-nav" type="submit" value="Register" />
          </div>
        )}
      </form>
    </div>
  ) : null;
};

export default NavModal;
