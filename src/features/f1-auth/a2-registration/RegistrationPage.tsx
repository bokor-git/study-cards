import React from "react";
import style from "./css.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./../../../main/m1-ui/common/Preloader/Preloader";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {useFormik} from "formik";
import {Button} from "../../../main/m1-ui/common/Button/Button";
import {registrationTC} from "../../../main/m2-bll/registration-reducer";
import {Redirect} from "react-router-dom";


function RegisterPage() {

    const dispatch = useDispatch();
    const isRegistered = useSelector<AppRootStateType,boolean>(state => state.registrationPage.isRegistered);

    let loading = useSelector<AppRootStateType, boolean>(state => state.passwordResetPage.loading)
    const formik = useFormik({
        validate: (values) => {
            if (!values.email) {
                return {
                    email: 'Please enter your email'
                }
            }
            if (!values.password) {
                return {
                    password: 'Please enter your password'
                }
            }
            // if (!values.verification_password) {
            //     return {
            //         verification_password: 'Please accept your password'
            //     }
            // }
        },
        initialValues: {
            email: '',
            password: '',
            // verification_password: '',
        },
        onSubmit: values => {
            alert(JSON.stringify(values))
            dispatch(registrationTC(values))
        },
    });

    if(isRegistered === true){
        return <Redirect to={'/login'}/>
    }

    return (loading ? <Preloader/> :
            <div>
                <h1>Registration Page</h1>
                <form onSubmit={formik.handleSubmit}>
                    Email
                    <input
                        className={style.input}
                        name="email"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.email}/>
                    {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                    Password
                    <input
                        className={style.input}
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}/>
                    {formik.errors.password ? <div className={style.error}>{formik.errors.password}</div> : null}
                    {/*Confirm the password*/}
                    {/*<input*/}
                    {/*    className={style.input}*/}
                    {/*    name="verification_password"*/}
                    {/*    type="password"*/}
                    {/*    onChange={formik.handleChange}*/}
                    {/*    value={formik.values.verification_password}/>*/}
                    {/*{formik.errors.verification_password ?*/}
                    {/*    <div className={style.error}>{formik.errors.verification_password}</div> : null}*/}

                    <Button onClick={() => {
                    }} text={"Регистрация"}/>
                </form>
            </div>
    )
}

export default RegisterPage;