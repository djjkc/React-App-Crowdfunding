import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <Link className="Bernadette" to="/">Bernadette</Link>
        <div className="nav-links">
        <Link to="/aboutus">About Us</Link>
        <Link to="/howwework">How We Work</Link>
        <Link to="/login">Login</Link>
        <Link to="/newproject">New Project</Link>
        </div>
        </nav>
    );
}

export default Nav;