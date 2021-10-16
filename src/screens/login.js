import React, { } from "react";
import { useDispatch } from 'react-redux';
import { decrement, increment } from '../redux/slices/counterSlice'

const Login = () => {
    const dispatch = useDispatch();


    return (
        <div>
            <h1>LOGIN</h1>
            <button onClick={() => dispatch(increment())}>INC</button>
            <button onClick={() => dispatch(decrement())}>DEC</button>
        </div>)
}

export default Login;

