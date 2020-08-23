import React from "react";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";


function ProfilePage() {
    const {name} = useSelector((state:AppRootStateType)=> state.auth.UserData)
    return (
        <div>
            <h1>Name:{name}</h1>
        </div>
    );
}

export default ProfilePage;