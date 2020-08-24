import React, {useCallback} from "react";
import "./headerNavbar.css"
import {NavLink} from "react-router-dom";
import {logoutTC} from "../../m2-bll/login-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {InitialStateType} from "../../m2-bll/app-reducer";

function HeaderNavbar() {
    const dispatch = useDispatch();
    const logoutHandler = useCallback(() => {dispatch(logoutTC())}, [])
    const isLoginIn = useSelector<AppRootStateType,InitialStateType>(state => state.loginPage.isLoginIn)
    const name = useSelector<AppRootStateType,InitialStateType>(state => state.loginPage.UserData?.name)

    return (
        <div className="nav-container">
            <nav className="menu">
                <ul className="menu__list">
                    {isLoginIn?<button onClick={logoutHandler} className="menu__link_logout">
                            {name} <br/>
                            <span>LogOut</span></button>:
                        <li className="menu__group"><NavLink className="menu__link" to="/login">Login</NavLink></li>}
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
