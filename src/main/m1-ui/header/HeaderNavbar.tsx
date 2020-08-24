import React, {useCallback} from "react";
import "./headerNavbar.css"
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { logoutTC } from "../../m2-bll/login-reducer";
import {AppRootStateType} from "../../m2-bll/store";

 function HeaderNavbar() {
    const dispatch = useDispatch();
    const logoutHandler= useCallback(()=>{
        dispatch(logoutTC())
    },[] )
     const isLoginIn = useSelector<AppRootStateType,boolean>(state => state.auth.isLoginIn);

     // if(isLoginIn === false){
     //     return <Redirect exact to={'/login'}/>
     // }
     return (
         <div className="nav-container">
             <nav className="menu">
                 <ul className="menu__list">
                     {isLoginIn &&<li  className="menu__group">
                         <button onClick={logoutHandler} className="menu__link_logout">Log out</button></li>}
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
