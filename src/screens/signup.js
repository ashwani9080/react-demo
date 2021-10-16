import React from "react";
import { useSelector } from 'react-redux';

const SignUp = () => {
    const {count} = useSelector((state) => state?.counterSlice);

    return (
        <div>
            <h1>SignUp</h1>
            <div>{count}</div>
        </div>)
}

export default SignUp;

