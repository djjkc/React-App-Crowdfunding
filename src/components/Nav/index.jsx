import React from "react";
import { Link } from "react-router-dom";
// import Bernadette from 'src/components/images/Bernadette.jpg'


function Nav() {
    return (
        <nav>
        <Link className="Bernadette" to="/">Bernadette <img src={"Bernadette"} alt="Bernadette Bear Logo" width ="10px" /></Link>
        <div className="nav-links">
        <Link to="/aboutus">About Us</Link>
        <Link to="/howwework">How We Work</Link>
        <Link to="/supportlinks">Support Links</Link>
        <Link to="/login">Login</Link>
        <Link to="/newproject">New Project</Link>
        </div>
        </nav>
    );
}

export default Nav;