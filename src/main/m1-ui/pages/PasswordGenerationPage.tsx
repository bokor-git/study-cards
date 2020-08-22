import React, {useState} from "react";
import {Input} from "../common/Input/Input";
import {Button} from "../common/Button/Button";
import {useDispatch} from "react-redux";
import {setNewPasswordTC} from "../../m2-bll/password-gereration-reducer";
import { useParams} from "react-router"

function PasswordGenerationPage() {
    const {id} = useParams();
    let dispatch = useDispatch()
    let [password, setPassword] = useState<string>("")
    const onInputChange = (value: string) => setPassword(value)

    const resetPass = () => {
        dispatch(setNewPasswordTC({password: password, resetPasswordToken: id}))
    }
    return (
        <div>
            <h1>Password Generation Page</h1>
            <Input onChange={onInputChange} error={false} value={password} placeholder={"Please set new password"}/>
            <Button onClick={resetPass} text={"Reset password"}/>
        </div>
    );
}

export default PasswordGenerationPage;