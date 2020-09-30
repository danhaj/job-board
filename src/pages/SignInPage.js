import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledSignInPage = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, button {
        width: 300px;
        padding: 15px 0;
        margin: 5px 0;
        font-family: 'Montserrat';
        font-size: 16px;
        color: #E7E7E7;
        background-color: transparent;
        border: 1px solid #96031A;
    }

    input {
        text-align: center;
    }

    button {
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: #96031A;
            transition-duration: 400ms;
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

    return (
        <StyledSignInPage>
            <input type='text' placeholder='E-mail' />
            <input type='password' placeholder='Password' />
            <button>Sign In</button>
            <span>
                Register your company <Link to='sign-up'>here</Link>
            </span>
        </StyledSignInPage>
    )
}

export default SignInPage;