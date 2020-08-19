import React, {useState} from "react";
import {Button} from "../common/Button/Button";
import {Checkbox} from "../common/Checkbox/Checkbox";
import {Input} from "../common/Input/Input";
import {Preloader} from "../common/Preloader/Preloader";

function LoginPage() {
    let [value, setValue] = useState<string>("Custom input")
    let [checked, setChecked] = useState<boolean>(true)

    const onChangeCheckbox = (checked: boolean) => setChecked(checked)
    const onChange = (e: string) => setValue(e)
    const onEnterPress = (e: string) => {
        alert(e);
        setValue("")
    }
    const onClick = () => alert("done")
    return (
        <div>
            <h1>Login Page</h1>
            <h2>My components:</h2>
            <div>
                <Input error={false} value={value} onChange={onChange} placeholder={"Custom input"}
                       onEnterPress={onEnterPress}/>
                <Checkbox onClick={onChangeCheckbox} checked={checked} text={"Custom checkbox"}/>
                <Button disabled={false} text={"Custom button"} onClick={onClick}/>
                <h4>Preloader:</h4>
                <Preloader/>

            </div>
        </div>
    );
}

export default LoginPage;