import React, { useState } from 'react'
// import Axios from 'axios';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../store/actions/user_action';
import { withRouter } from 'react-router-dom';

import IdInsert from './IdInsert';
import PwInsert from './PwInsert';
import './LoginPage.css';


const LoginPage = (props) => {
    const dispatch = useDispatch();

    const [userid, setUserid] = useState("");
    const [userpw, setUserpw] = useState("");

    const onEmailHandler = (event) => {
        setUserid(event.currentTarget.value)
    }

    const onPasswordHandler = (event) => {
        setUserpw(event.currentTarget.value)
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        let body = {
            userID: userid,
            userPW: userpw
        }

        dispatch(loginUser(body))
            .then(response => {
                if (response.payload.loginSuccess) {
                    props.history.push('/')
                } else {
                    alert('Error˝')
                }
            })


    }

    return (
        <div className="wrapper">
            <form className="LoginPage" onSubmit={onSubmitHandler}>
                <div className="LoginTitle">Todo List</div>
                <IdInsert onChange={onEmailHandler} />
                <PwInsert onChange={onPasswordHandler} />

                <button className="login_btn" type="submit">로그인</button>
            </form>
        </div>
    )
}

export default withRouter(LoginPage)
