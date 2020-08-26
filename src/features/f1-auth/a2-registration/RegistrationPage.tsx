import React from "react";
import style from "./css.module.css";
import {useDispatch, useSelector} from "react-redux";
import {Preloader} from "./../../../main/m1-ui/common/Preloader/Preloader";
import {AppRootStateType} from "../../../main/m2-bll/store";
import {useFormik} from "formik";
import {registrationTC} from "../../../main/m2-bll/registration-reducer";
import {Redirect} from "react-router-dom";
import {ErrorSnackbar} from "../../../main/m1-ui/common/ErrorSnackbar/ErrorSnackbar";


function RegisterPage() {

    const dispatch = useDispatch();
    const isRegistered = useSelector<AppRootStateType, boolean>(state => state.registrationPage.isRegistered);

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
            let data = {
                email: values.email,
                password: values.password
            }
            dispatch(registrationTC(data))
        },
    });

    if (isRegistered === true) {
        return <Redirect to={'/login'}/>
    }

    return (
            <div className={style.registerPage}>
                <div className={style.contentContainer}>
                <div className={style.Container}>
                    <div className={style.title}><h1>Registration Page</h1></div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className={style.formgroup}>
                            <input
                                className={style.formValue}
                                id="email"
                                name="email"
                                type="text"
                                placeholder="Enter your Email"
                                onChange={formik.handleChange}
                                value={formik.values.email}/>
                            <label htmlFor={"email"}>Email</label>
                            {formik.errors.email ? <div className={style.error}>{formik.errors.email}</div> : null}
                        </div>
                        <div className={style.formgroup}>
                            <input
                                className={style.formValue}
                                id="password"
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                onChange={formik.handleChange}
                                value={formik.values.password}/>
                            <label htmlFor={"password"}>Password</label>
                            {formik.errors.password ?
                                <div className={style.error}>{formik.errors.password}</div> : null}
                        </div>
                        {/*Confirm the password*/}
                        {/*<input*/}
                        {/*    className={style.input}*/}
                        {/*    name="verification_password"*/}
                        {/*    type="password"*/}
                        {/*    onChange={formik.handleChange}*/}
                        {/*    value={formik.values.verification_password}/>*/}
                        {/*{formik.errors.verification_password ?*/}
                        {/*    <div className={style.error}>{formik.errors.verification_password}</div> : null}*/}

                        <div className={style.buttonRegister}>
                            <button>Регистрация</button>
                        </div>
                        <ErrorSnackbar/>
                    </form>
                </div>
                </div>

            </div>
    )}

export default RegisterPage;