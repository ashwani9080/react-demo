import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { setAccessToken } from '../redux/slices/userSlice';

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const details = useSelector(state => state?.userSlice?.details);

    const onSubmit = useCallback(
        (data) => {
            const { username, password } = data;
            if (username === details?.['username'] && password === details?.['password']) {
                dispatch(setAccessToken('token'));
            } else {
                dispatch(setAccessToken(null))
            }
        }, []
    )

    return (
        <div>
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

