import React, { useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
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
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleSubmit = ev => {
        ev.preventDefault();
        
        axios.post('http://localhost:1337/auth/local/register', {
            username: company.current.value,
            email: email.current.value,
            password: password.current.value
        })
        .then(res => {
            const { user } = res.data;
            dispatch(setCurrentUser(user));
            history.push('/');
        })
    }

    return (
        <StyledSignUpPage>
            <input ref={company} type='text' placeholder='Company name' />
            <input ref={email} type='text' placeholder='E-mail' />
            <input ref={password} type='password' placeholder='Password' />
            <input type='submit' onClick={handleSubmit} value='Sign Up' />
        </StyledSignUpPage>
    )
}

export default SignUpPage;