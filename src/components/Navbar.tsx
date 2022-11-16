import { useState } from "react";
import '../App.css';

// Pass data to app.tsx
const Navbar = () => {
    const [userName, setUsername] = useState("");
    const [userPassword, setPassword] = useState("");
    const [data, setData] = useState<any>("");

    const handleSubmit = (e: any) => {
        e.preventDefault();

        fetch(`/api/users/userName/${userName}/userPassword/${userPassword}`)
            .then((res) => res.json())
            .then((data) => setData(data));

        console.log(data);
    };

    // Post request to create an account..

    return (
        <div className="Nav-bar">
            <form onSubmit={handleSubmit}>
                <h1 className="h1-nav">Paid Time Off</h1>
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
            <p>{data.userName}</p>
        </div>
    );
}

export default Navbar;
