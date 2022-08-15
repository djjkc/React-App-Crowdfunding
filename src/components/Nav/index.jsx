import React from "react";
import { Link } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <Link className="Bernadette" to="/">Bernadette</Link>
        <div className="nav-links">
        <Link to="/login">Login</Link>
        </div>
        </nav>
    );
}

export default Nav;