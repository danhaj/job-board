import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
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
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(!user.username) 
            alert(`If you don't want to register new account, use: \n\nguest@mail.com \nguestCompany `)
    })


    const handleSubmit = ev => {
        ev.preventDefault();
        
        axios.post('https://strapi-job-board.herokuapp.com/auth/local', {
            identifier: email.current.value,
            password: password.current.value
        })
        .then(res => {
            const { user } = res.data;
            dispatch(setCurrentUser(user));
            localStorage.setItem('user', JSON.stringify(user));
            history.push('/');
        })
        .catch(err => alert('error'))
    }

    return (
        <StyledSignInPage onSubmit={handleSubmit}>
            {
                user.username ?
                <p>You are already logged!</p>
                :
                <>
                    <input ref={email} type='email' placeholder='E-mail' required />
                    <input ref={password} type='password' placeholder='Password' required />
                    <input type='submit' value='Sign In' />
                    <span>
                        Register your company <Link to='sign-up'>here</Link>
                    </span>
                </>
            }
        </StyledSignInPage>
    )
}

export default SignInPage;