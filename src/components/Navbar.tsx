import { useState } from "react";
import '../App.css';
import logo from '../store86-logo.png';

// Pass data to app.tsx
const Navbar = ({ setData, data }: any) => {
    const [userName, setUsername] = useState<string>("");
    const [userPassword, setPassword] = useState<string>("");


    const handleSubmit = (e: any) => {
        e.preventDefault();

        fetch(`/api/users/userName/${userName}/userPassword/${userPassword}`)
            .then((res) => res.json())
            .then((data) => setData(data));
    };

    // Post request to create an account..

    return (
        <div className="Nav-bar">
            <div className="img-div">
                <img className="logo-nav" src={logo} alt="logo" />
            </div>
            <h1 className="h1-nav">Paid Time Off  <p>Logged in: {data.userName} </p></h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>
                        <input placeholder="User name" className="input-nav" type="text" value={userName} onChange={(event) => setUsername(event.target.value)} />
                    </label>
                    <label>
                        <input placeholder="Password" className="input-nav" type="password" value={userPassword} onChange={(event) => setPassword(event.target.value)} />
                    </label>
                    <input className="button-nav" type="submit" value="Log in" />
                    <input className="button-nav" type="submit" value="Register" />
                </div>
            </form>
        </div>
    );
}

export default Navbar;
