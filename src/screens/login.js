import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setAccessToken } from '../redux/slices/persistedSlice';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const details = useSelector(state => state?.persistedSlice?.details);

    const onSubmit = useCallback(
        (data) => {
            console.log(details)
            const { username, password } = data;
            if (username === details?.['username'] && password === details?.['password']) {
                dispatch(setAccessToken('token'));
            } else {
                dispatch(setAccessToken(null))
            }
        }, []
    )

    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <div>LOGIN</div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input  {...register("username")} />
                <input  {...register("password")} />
                <input type="submit" />
            </form>
            <Link to="/register">Register</Link>
        </div>)
}

export default Login;

