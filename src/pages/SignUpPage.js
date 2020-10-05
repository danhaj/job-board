import React, { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/actions';
import styled from 'styled-components';

const StyledSignUpPage = styled.form`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
        width: 300px;
        padding: 15px 0;
        margin: 5px 0;
        font-family: 'Montserrat';
        font-size: 16px;
        text-align: center;
        color: #E7E7E7;
        background-color: transparent;
        border: 1px solid #96031A;

        &[type='submit'] {
            font-weight: bold;
            cursor: pointer;

            &:hover {
                background-color: #96031A;
                transition-duration: 400ms;
            }
        }
    }
`

const SignUpPage = () => {
    const company = useRef();
    const email = useRef();
    const password = useRef();
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = ev => {
        ev.preventDefault();
        
        axios.post('https://strapi-job-board.herokuapp.com/auth/local/register', {
            username: company.current.value,
            email: email.current.value,
            password: password.current.value
        })
        .then(res => {
            const { user } = res.data;
            dispatch(setCurrentUser(user));
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        })
        .catch(() => alert('error'))
    }

    return (
        <StyledSignUpPage onSubmit={handleSubmit}>
            {
                user.username ?
                <p>You are already logged!</p>
                :
                <>
                    <input ref={company} type='text' placeholder='Company name' required />
                    <input ref={email} type='email' placeholder='E-mail' required />
                    <input ref={password} type='password' placeholder='Password' required />
                    <input type='submit' value='Sign Up' />
                </>
            }
        </StyledSignUpPage>
    )
}

export default SignUpPage;