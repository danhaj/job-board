import React from 'react';
import styled from 'styled-components';

const StyledSignUpPage = styled.div`
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
`

const SignUpPage = () => {

    return (
        <StyledSignUpPage>
            <input type='text' placeholder='Company name' />
            <input type='text' placeholder='E-mail' />
            <input type='password' placeholder='Password' />
            <button>Sign Up</button>
        </StyledSignUpPage>
    )
}

export default SignUpPage;