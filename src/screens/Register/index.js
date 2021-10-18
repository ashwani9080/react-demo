import React from "react";
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";

import { userDetails } from '../../redux/slices/userSlice';
import styles from './styles.css'
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
        <div className={styles.container}>
            <form
                onSubmit={handleSubmit(onSubmit)}>
                <input {...register("username", { required: true, maxLength: 20 })} />
                <input {...register("password", { pattern: /^[A-Za-z]+$/i })} />
                <input type="submit" />
            </form>
            <Link to="/login">Login</Link>     
        </div>)
}

export default SignUp;

