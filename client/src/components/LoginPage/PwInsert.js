import React from 'react';
import { CgLock } from "react-icons/cg";
import './PwInsert.css';

const PwInsert = ({ onPasswordHandler, userpw }) => {
    return (
        <div className="PwInsert">
            <CgLock />
            <input type="password" value={userpw} onChange={onPasswordHandler} placeholder="비밀번호" />
        </div>
    )
};
export default PwInsert;
