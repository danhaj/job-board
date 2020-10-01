import React, { useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/actions';
import styled from 'styled-components';

const StyledSignInPage = styled.form`
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

    span {
        padding-top: 15px;

        a {
            color: #E7E7E7;
            font-weight: bold;
        }
    }
`

const SignInPage = () => {
    const email = useRef();
    const password = useRef();
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = ev => {
        ev.preventDefault();
        
        axios.post('http://localhost:1337/auth/local', {
            identifier: email.current.value,
            password: password.current.value
        })
        .then(res => {
            const { user } = res.data;
            dispatch(setCurrentUser(user));
            history.push('/');
        })
    }

    return (
        <StyledSignInPage>
            <input ref={email} type='text' placeholder='E-mail' />
            <input ref={password} type='password' placeholder='Password' />
            <input type='submit' onClick={handleSubmit} value='Sign In' />
            <span>
                Register your company <Link to='sign-up'>here</Link>
            </span>
        </StyledSignInPage>
    )
}

export default SignInPage;