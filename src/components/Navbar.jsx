import React from "react";
import { NavLink, Route } from "react-router-dom"
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

                        <li>
                            <NavLink to='/contact' >
                                Contact
                            </NavLink>
                        </li>

                    </ul>

                </div>

                <div className="login-signup">

                    <NavLink to='/signup' className="login" >
                        SignUp
                    </NavLink>


                
                </div>
            </nav>
        </>
    )
}
export default Navbar;