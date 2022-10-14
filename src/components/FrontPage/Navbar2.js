import React, { useState } from "react";
import "./nav.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar2 = () => {
    const [Mobile, setMobile] = useState (false);

    return(
        <nav className="Navbar">
                <div className="container">
                    <h3 className="logo">Logo</h3>

                    <ul className={Mobile ? "nav-links-mobile" :"nav-links"} onClick={() => setMobile(false)}>
                        <Link to='/'>
                            <li>Home</li>
                        </Link>
                        <Link to='/About'>
                            <li>About</li>
                        </Link>
                        <Link to='/Skills'>
                            <li>Skills</li>
                        </Link>
                        <Link to='/Skills'>
                            <li>Services</li>
                        </Link>
                        <Link to='/Contact'>
                            <li>Contact</li>
                        </Link>
                    </ul>
                    <button className="mobile-menu-icon" onClick={() => setMobile(!Mobile)}>
                        {Mobile ? <FaTimes/>: <FaBars/>}
                    </button>
                </div>
        </nav>
    )
}
export default Navbar2 ;