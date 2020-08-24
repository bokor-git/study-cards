import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {Redirect} from "react-router-dom";


function ProfilePage() {
    const name = useSelector((state:AppRootStateType)=> state.loginPage.UserData?.name)
    const isLoginIn = useSelector<AppRootStateType, boolean>(state => state.loginPage.isLoginIn);

    if (isLoginIn === false) {
        return <Redirect to={'/login'}/>
    }
    return (
        <div>
            <h1>Name:{name}</h1>
        </div>
    );
}

export default ProfilePage;