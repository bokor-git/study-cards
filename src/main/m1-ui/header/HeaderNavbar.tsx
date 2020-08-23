import React, {useCallback} from "react";
import "./headerNavbar.css"
import {NavLink} from "react-router-dom";
// import {useDispatch} from "react-redux";
// import { logoutTC } from "../Login/login-reducer";
//
 function HeaderNavbar() {
//     const dispatch = useDispatch();
//     const logoutHandler= useCallback(()=>{
//         dispatch(logoutTC())
//     },[] )

     return (
         <div className="nav-container">
             <nav className="menu">
                 <ul className="menu__list">
                     <li className="menu__group">
                         <button className="menu__link"></button>
                     </li>
                     <li className="menu__group"><NavLink className="menu__link" to="/login">Login</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link"
                                                          to="/registration">registration</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/password-reset">password
                         reset</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/password-generation">password
                         generation</NavLink></li>
                     <li className="menu__group"><NavLink className="menu__link" to="/profile">profile</NavLink></li>
                 </ul>
             </nav>

         </div>
     )

 }

export default HeaderNavbar;
