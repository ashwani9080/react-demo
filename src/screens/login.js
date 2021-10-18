import React from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setAccessToken } from '../redux/slices/userSlice';
import { useHistory } from "react-router-dom";

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const history = useHistory();

    const details = useSelector(state => state.userSilce.details);

    const onSubmit = data => {
        const { username, password } = data;
        if (username == details['username'] && password == details['password']) {
            console.log('>>>>')
            dispatch(setAccessToken('token'));
            history.push('/home')
        } else {
            dispatch(setAccessToken(null))
        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("username")} />
                <input  {...register("password")} />
                <input type="submit" />
            </form>
            <Link to="/register">Register</Link>
        </div>)
}

export default Login;

