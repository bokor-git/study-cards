import React, {useState} from "react";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {useDispatch, useSelector} from "react-redux";
import {resetPasswordTC} from "../../m2-bll/password-reset-reducer";
import {AppRootStateType} from "../../m2-bll/store";
import {Preloader} from "../common/Preloader/Preloader";


function PasswordResetPage() {
    let loading = useSelector<AppRootStateType, boolean>(state => state.passwordResetPage.loading)
    let dispatch = useDispatch()
    let [email, setEmail] = useState<string>("")
    const resetPass = () => {
        dispatch(resetPasswordTC(email))
    }
    const onInputChange = (value: string) => setEmail(value)
    return ( loading ? <Preloader/>  :
                <div>
                    <h1>Password Reset Page</h1>
                    <div>Email for reset:</div>
                    <Input onChange={onInputChange} error={false} value={email} placeholder={"Please set email"}/>
                    <Button onClick={resetPass} text={"Reset password"}/>
                </div>
    )
}

export default PasswordResetPage;