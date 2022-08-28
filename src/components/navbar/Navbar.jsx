import React from "react";
import "./navbar.css";
import logo from "../../assets/logo.png";

import Burger from "./Burger";

function Navbar(){
    return(
        <>
            <nav>
            <a href="#"><img src={logo} alt="logo" className="logo" title="Ritika Pandey's Portfolio"></img></a>
                <Burger/>

                
            </nav>
        </>
    );
}
export default Navbar;