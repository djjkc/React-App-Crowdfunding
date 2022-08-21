import React from "react";
import { Link } from "react-router-dom";


function Nav() {
    return (
        <nav>
        <Link className="Bernadette" to="/">Bernadette <img src={'src/components/images/Bernadette.jpg'} alt="Bernadette Bear Logo" width ="10px" /></Link>
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