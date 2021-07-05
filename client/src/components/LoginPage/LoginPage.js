import React, { useState } from 'react'
import Axios from 'axios'
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/user_action';
import { withRouter } from 'react-router-dom';


import './LoginPage.css';

import { CgLock } from "react-icons/cg";
import './PwInsert.css';

import { IoPersonOutline } from "react-icons/io5";
import './IdInsert.css';


function LoginPage(props) {
    const dispatch = useDispatch();

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")

    const onEmailHandler = (event) => {
        setEmail(event.target.value)
    }

    const onPasswordHandler = (event) => {
        setPassword(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            email: Email,
            password: Password
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error')
                }
            })


    }
    //             

    return (
        <div className="wrapper">
            <form className="LoginPage" onSubmit={onSubmitHandler}>
                <div className="LoginTitle">Todo List</div>

                <div className="IdInsert">
                    <IoPersonOutline />
                    <input type="email" value={Email} onChange={onEmailHandler} placeholder="이메일" />
                </div>

                <div className="PwInsert">
                    <CgLock />
                    <input type="password" value={Password} onChange={onPasswordHandler} placeholder="비밀번호" />
                </div>
                <button className="login_btn" type="submit">로그인</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)