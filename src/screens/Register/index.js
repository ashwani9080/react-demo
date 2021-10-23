import React, { useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import useAxios from 'axios-hooks';

import { userDetails } from '../../redux/slices/persistedSlice';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { registerUserConfig } from '../../utils/api';
import { setLoading } from '../../redux/slices/sessionSlice';
import './styles.css'

const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();
    const [{ data: response, loading, error: registerError }, registerService] = useAxios(registerUserConfig)

    const onSubmit = data => {
        registerService({ data: { ...data } });
    }

    useEffect(() => {
        if (response) {
            dispatch(userDetails(response));
            history.push('/login')
        }
    }, [response])

    useEffect(() => {
        console.log(registerError)
        dispatch(setLoading(false))
    }, [registerError])

    useEffect(() => {
        dispatch(setLoading(loading))
    }, [loading])

    return (
        <div className="container">
            <div>Register</div>
            <form
                style={{ display: "flex", flexDirection: 'column',justifyContent:"center" }}
                onSubmit={handleSubmit(onSubmit)}>
                <input className="input" {...register("email")} />
                <input className="input" {...register("password")} />
                <input className="button" type="submit" />
            </form>
            <Link to="/login">Login</Link>
        </div>)
}

export default SignUp;

