import React, { useRef } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth } from '../services/firebase';

import Form from '../components/Form';

const StyledSignInPage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > span {
    padding-top: 15px;

    a {
      color: #e7e7e7;
      font-weight: bold;
    }
  }
`;

const SignInPage = () => {
  const email = useRef();
  const password = useRef();
  const user = useSelector(state => state.currentUser);

  const handleSubmit = async ev => {
    ev.preventDefault();

    await auth.signInWithEmailAndPassword(
      email.current.value,
      password.current.value,
    );
  };

  if (user) return <Redirect to='/' />;

  return (
    <StyledSignInPage>
      <Form onSubmit={handleSubmit}>
        <input ref={email} type='email' placeholder='E-mail' required />
        <input ref={password} type='password' placeholder='Password' required />
        <input type='submit' value='Sign In' />
      </Form>
      <span>
        Register your company <Link to='sign-up'>here</Link>
      </span>
    </StyledSignInPage>
  );
};

export default SignInPage;
