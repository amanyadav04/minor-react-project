import React from "react";
import {NavLink,Route} from "react-router-dom"
const Navbar = () => {
    return (
        <>
            <nav>
                <div className="links-logo">

                    <a className="image">
                        <img className="logo-img" src="logo.png" alt="" />
                    </a>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>
                        <NavLink to='/contact' >
                           Contact
                        </NavLink>
                        </li>
                        <li>Services</li>
                    </ul>

                </div>

                <div className="login-signup">
                    <a href="#" className="signup">
                        Sign up
                    </a>

                    <a href="#" className="login">
                        Login
                    </a>
                </div>
            </nav>
        </>
    )
}
export default Navbar;