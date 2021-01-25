import React, { useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { auth } from '../services/firebase';

import Form from '../components/Form';

const StyledSignUpPage = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const SignUpPage = () => {
    const company = useRef();
    const email = useRef();
    const password = useRef();
    const user = useSelector(state => state.currentUser);
    
    const handleSubmit = ev => {
        ev.preventDefault();

        auth().createUserWithEmailAndPassword(email.current.value, password.current.value)
        .then(res => {
            res.user.updateProfile({
                displayName: company.current.value
            });
        })
    }

    return (
        <StyledSignUpPage>
            {
                user ?
                <Redirect to="/" />
                :
                <Form onSubmit={handleSubmit}>
                    <input ref={company} type='text' placeholder='Company name' required />
                    <input ref={email} type='email' placeholder='E-mail' required />
                    <input ref={password} type='password' placeholder='Password' required />
                    <input type='submit' value='Sign Up' />
                </Form>
            }
        </StyledSignUpPage>
    )
}

export default SignUpPage;