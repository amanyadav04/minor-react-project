import React from "react";
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
                        <li>Contact</li>
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