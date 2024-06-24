import React from "react";
import { NavLink } from "react-router-dom";

const Homework = (homework) => {
    return (
        <div className="card">
            <h4>{homework.title}</h4>
            <NavLink to={`/details/${homework.id}`}>Detaya git</NavLink>
        </div>
    );
};

export default Homework;
