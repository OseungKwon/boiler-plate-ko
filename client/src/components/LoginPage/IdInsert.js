import React from 'react';
import { IoPersonOutline } from "react-icons/io5";
import './IdInsert.css';

const IdInsert = ({ onEmailHandler, userid }) => {
    return (
        <div className="IdInsert">
            <IoPersonOutline />
            <input type="email" value={userid} onChange={onEmailHandler} placeholder="아이디" />
        </div>
    )
};
export default IdInsert;

