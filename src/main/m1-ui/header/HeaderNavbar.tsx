import React, {useCallback} from "react";
import style from "./headerNavbar.module.css"
import {NavLink, Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {logoutTC} from "../../m2-bll/login-reducer";
import {AppRootStateType} from "../../m2-bll/store";
import {useLocation} from "react-router";

function HeaderNavbar() {
    const location = useLocation()
    const dispatch = useDispatch();
    const logoutHandler = useCallback(() => {
        dispatch(logoutTC())
    }, [])
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);

    if (isLoginIn === false && location.pathname.length!== 57) {
        return <Redirect exact to={'/login'}/>
    }
    return (
            <nav className={style.menu}>
                <ul className={style.menu__list}>
                    {isLoginIn && <li className={style.menu__group}>
                        <button onClick={logoutHandler} className={style.menu__link_logout}>Log out</button>
                    </li>}
                    <li className={style.menu__group}><NavLink className={style.menu__link}
                                                         to="/registration">registration</NavLink></li>
                    <li className={style.menu__group}><NavLink className={style.menu__link} to="/password-reset">password
                        reset</NavLink></li>
                    <li className={style.menu__group}><NavLink className={style.menu__link} to="/password-generation">password
                        generation</NavLink></li>
                    <li className={style.menu__group}><NavLink className={style.menu__link} to="/profile">profile</NavLink></li>
                </ul>
            </nav>

    )

}

export default HeaderNavbar;
