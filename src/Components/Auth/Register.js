import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

const Register = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const inputs = useState()

    const handleSubmit = (e)=>{
        e.preventDefault();

    };
    return (
        <div>
            <form method="post" onSubmit={()=>handleSubmit()}>
                <label>Name</label>
                <input type="text" className="form-control" />
                <label>Email</label>
                <input type="email" className="form-control" />
                <label>Password</label>
                <input type="password" className="form-control" />
            </form>
        </div>
    );
};

export default Register;
