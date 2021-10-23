import { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import useAxios from 'axios-hooks';

import { setAccessToken } from '../redux/slices/persistedSlice';
import { setLoading } from '../redux/slices/sessionSlice';
import { loginConfig } from '../utils/api';

const Login = () => {
    const dispatch = useDispatch();
    const [loginError, setLoginError] = useState();
    const { register, handleSubmit, watch } = useForm();
    const [{ data: loginData, loading, error }, executeLogin] = useAxios(loginConfig)

    const onSubmit = useCallback(
        (data) => {
            const { email, password } = data;
            executeLogin({
                data: {
                    email, password
                }
            })
        }, []
    )

    useEffect(() => {
        dispatch(setAccessToken(loginData?.id))
    }, [loginData])

    useEffect(() => {
        if (error) {
            setLoginError(error?.response?.data?.errorName)
            dispatch(setLoading(false))
        }
    }, [error?.response?.data?.errorName,loginError])

    useEffect(() => {
        dispatch(setLoading(loading))
    }, [loading])


    return (
        <div >
            <div>LOGIN</div>
            <form style={{ display: "flex", flexDirection: 'column' }}
                onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("email")} />
                <input  {...register("password")} />
                <input type="submit" />
            </form>
            < Link to="/register">Register</Link>
        </div >)
}

export default Login;

