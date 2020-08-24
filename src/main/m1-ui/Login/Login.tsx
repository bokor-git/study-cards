import React from 'react'
import {Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, TextField, Button, Grid} from '@material-ui/core'
import {useFormik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {loginTC} from "./login-reducer";

import { Redirect } from 'react-router-dom';
import { AppRootStateType } from '../../m2-bll/store';
import {ErrorSnackbar} from "../ErrorSnackbar/ErrorSnackbar";

export const Login = () => {

    const dispatch = useDispatch();
    const isLoginIn = useSelector<AppRootStateType,boolean>(state => state.auth.isLoginIn);

    const formik = useFormik({
        validate:(values)=>{
            if (!values.email){
                return {
                    email:'Please enter your email'
                }
            }
            if (!values.password){
                return {
                    password: 'Please enter your password'
                }
            }
        },
        initialValues: {
            email: '',
            password:'',
            rememberMe: false,
            verified:false
        },
        onSubmit: values => {
            dispatch(loginTC(values));
        },
    });

    if(isLoginIn === true){
        return <Redirect to={'/profile'}/>
    }

    return <Grid container justify="center">
        <Grid item xs={4}>
            <form onSubmit={formik.handleSubmit}>
                <FormControl>
                    <FormLabel>
                        <p>
                            To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                                        target={'_blank'}>here</a>
                        </p>
                        <p>
                            or use common test account credentials:
                        </p>
                        <p> Email: nya-admin@nya.nya
                        </p>
                        <p>
                            Password: 1qazxcvBG
                        </p>
                    </FormLabel>
                    <FormGroup>
                        <TextField
                            label="Email"
                            margin="normal"
                            {...formik.getFieldProps('email')}
                        />
                        {formik.errors.email ? <div>{formik.errors.email}</div> : null}
                        <TextField
                            type="password"
                            label="Password"
                            margin="normal"
                            {...formik.getFieldProps('password')}
                        />
                        {formik.errors.password ? <div>{formik.errors.password}</div> : null}
                        <FormControlLabel
                            label={'Remember me'}
                            control={<Checkbox />}
                            {...formik.getFieldProps('rememberMe')}
                            checked={formik.values.rememberMe}
                        />
                        <Button type={'submit'} variant={'contained'} color={'primary'}>Login</Button>
                        <ErrorSnackbar/>
                    </FormGroup>
                </FormControl>
            </form>

        </Grid>
    </Grid>
}
