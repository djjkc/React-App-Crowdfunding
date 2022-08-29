import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Bernadette from "../images/Bernadette.png"
import Bear from "../images/Bear.png"

const Nav = () => {
    const location = useLocation()
    const [loggedIn, setLoggedIn] = useState(!!window.localStorage.getItem('token'));
    const logOut = () => {
        window.localStorage.removeItem("token");
            setLoggedIn(false)
    }


    React.useEffect(() => {
        setLoggedIn(!!window.localStorage.getItem('token'))
    }, [window.localStorage, location]
    )
    
    return (
        <nav>
            <Link className="Bernadette" to="/">Bernadette <img src={Bernadette} alt="Bernadette Bear Logo" width ="10px" /></Link>
            <div className="nav-links">
                <Link to="/aboutus">About Us</Link>
                <Link to="/howwework">How We Work</Link>
                <Link to="/supportlinks">Support Links</Link>
                {loggedIn ? (
                <Link to = "/" onClick={logOut}>Logout</Link>) 
                :(<Link to = "/login">Login</Link>)}
                {loggedIn ? (
                <Link to = "/newproject">New Project</Link>) 
                :null}
            </div>
        </nav>
    );
}


export default Nav;