import React from "react";
import "./headerNavbar.css"
import {NavLink} from "react-router-dom";

function HeaderNavbar() {
    return (
     <div className="nav-container">
             <nav className="menu">
                 <ul className="menu__list">
                     <li className="menu__group"><NavLink className="menu__link" to="/login">login</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/registration">registration</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/password-reset">password reset</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/password-generation">password generation</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/profile">profile</NavLink></li>
                 </ul>
             </nav>

     </div>
    )

}

export default HeaderNavbar;
