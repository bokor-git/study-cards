import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {changeUserDataTC, isInitializedTC} from "../../m2-bll/profile-reducer";
import {CircularProgress, TextField} from "@material-ui/core";
import {Redirect} from "react-router-dom";
import {userDate} from "../../m2-bll/login-reducer";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";


function ProfilePage() {

    const {name,email,avatar} = useSelector<AppRootStateType,userDate>((state)=> state.auth.UserData)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.profilePage.isInitialized)
    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType,boolean>(state => state.auth.isLoginIn);
    let[newName, setNewName]= useState(name)
    let[newAvatar, setAvatar]= useState()
    const updateProfile = ()=>{
        dispatch(changeUserDataTC({
            name: newName,
            // @ts-ignore
            avatar: newAvatar}))
    }
    useEffect(()=>{
        dispatch(isInitializedTC());
    },[])
    if(isLoginIn === false){
        return <Redirect exact to={'/login'}/>
    }
    return (
        <div>
            <h2>Name:{name}</h2>
            <img src={avatar} alt="" style={{width:'300px', height:'200px'}}/>
            <h2>E-mail: {email}</h2>
            <hr style={{width:"100%"}}/>
            <p>New name</p>
            <TextField value={newName} name={"Name"} onChange={(event) => setNewName(event.currentTarget.value)}/>
            <p>New avatar(ULR):</p>
            <TextField value={newAvatar} name={"Name"} onChange={(event) => setAvatar(event.currentTarget.value)}/>
            <div>
                <Button style={{margin:"20px"}}  size={"small"}  variant="contained" color="primary" onClick={updateProfile}>
                    Update Profile Info
                </Button>
            </div>
        </div>
    );
}

export default ProfilePage;