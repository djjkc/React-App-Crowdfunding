import React, { useState } from "react";
import { Link } from "react-router-dom";
import Bernadette from "../images/Bernadette.png"
import Bear from "../images/Bear.png"

const Nav = () => {
    const [loggedIn, setLoggedIn] = useState(!window.localStorage.getItem('token'));
    const logOut = () => {
        window.localStorage.removeItem("token");
            setLoggedIn(false)
    }
    console.log(loggedIn)
    
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
                :(<img src={Bear} alt="bear" width= "10px" />)}
            </div>
        </nav>
    );
}


export default Nav;