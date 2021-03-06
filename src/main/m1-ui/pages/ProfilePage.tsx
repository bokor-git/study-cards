import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {changeUserDataTC, isInitializedTC} from "../../m2-bll/profile-reducer";
import {Redirect} from "react-router-dom";
import {userDate} from "../../m2-bll/login-reducer";
import style from "./styleProfilaPage.module.css"
import TableForProfile from "../../../features/f2-table/a3-TableOfProfile/TableProfile";
import {getPacksTC, PackType} from "../../m2-bll/table-reduser";


function ProfilePage() {
    const {name, email, avatar, publicCardPacksCount, _id} = useSelector<AppRootStateType, userDate>((state) => state.auth.UserData)
    const PacksData = useSelector<AppRootStateType, Array<PackType> | null>(state => state.table.allPacks);
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.auth.isLoginIn);
    const checkAuth = (isLoginIn: boolean) => {
        if (isLoginIn === false) {
            dispatch(isInitializedTC)
            if (isLoginIn === false) {
                return <Redirect exact to={'/login'}/>
            }
        }
    }
    useEffect(() => {
        checkAuth(isLoginIn)
        dispatch(getPacksTC("", _id))
    }, [])
    return (
        <div className={style.MainContainer}>
            <div className={style.Photo}>
                <img src={avatar}/>
            </div>
            <div className={style.ProfileInfo}>
                <div className={style.InfoItem}>Name: {name}</div>
                <div className={style.InfoItem}>Email: {email} </div>
                <div className={style.InfoItem}>Count of your Packs: {publicCardPacksCount} </div>
                <div className={style.TableOfPacks}><TableForProfile columnsName={["Name", "Cards", "Grade"]}
                                                                     buttonsData={[]}
                                                                     rowContent={PacksData}/></div>
            </div>
        </div>
    );
}

export default ProfilePage;