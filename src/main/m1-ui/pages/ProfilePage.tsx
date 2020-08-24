import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../m2-bll/store";
import {isInitializedTC} from "./profile-reducer";
import {CircularProgress} from "@material-ui/core";


function ProfilePage() {
    const {name,avatar,email} = useSelector((state:AppRootStateType)=> state.auth.UserData)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.ProfileReducer.isInitialized)
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(isInitializedTC());
    },[])

    if(!isInitialized){
        return <div style={{position: 'fixed',top:'30%',textAlign:'center',width:'100%'}}>
            <CircularProgress />
        </div>
    }
    return (
        <div>
            <h1>Name:{name}</h1>
            <img src={avatar} alt="" style={{width:'100px', height:'100px'}}/>
            <div>E-mail: {email}</div>
        </div>
    );
}

export default ProfilePage;