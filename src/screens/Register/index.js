import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { userDetails } from '../../redux/slices/userSlice';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";


const SignUp = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        dispatch(userDetails(data));
        history.push('/login')
    }

    return (
        <div>
            <div>Register</div>
            <form
                style={{ display: "flex", flexDirection: 'column' }}
                onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username")} />
                <input {...register("password")} />
                <input type="submit" />
            </form>
            <Link to="/login">Login</Link>
        </div>)
}

export default SignUp;

