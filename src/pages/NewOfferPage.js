import React, { useRef } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const StyledNewOfferPage = styled.form`
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

    textarea {
        width: 300px;
        height: 300px;
        padding: 15px 0;
        margin: 5px 0;
        font-family: 'Montserrat';
        font-size: 16px;
        text-align: center;
        color: #E7E7E7;
        background-color: transparent;
        border: 1px solid #96031A;
    }
}
`

const NewOfferPage = () => {
    const user = useSelector(state => state.currentUser);
    const history = useHistory();
    const title = useRef();
    const city = useRef();
    const description = useRef();

    if(!user.username) {
        history.push('/sign-in');
    }

    const handleSubmit = ev => {
        ev.preventDefault();
        
        axios.post('https://strapi-job-board.herokuapp.com/offers', {
            title: title.current.value,
            city: city.current.value,
            description: description.current.value,
            company: user.username
        })
        .then(() => {
            history.push('/offers');
        })
        .catch(() => alert('error'))
    }

    return (
        <StyledNewOfferPage onSubmit={handleSubmit}>
            <input ref={title} type='text' placeholder='Title' required />
            <input ref={city} type='text' placeholder='City' required />
            <textarea ref={description} placeholder='Description' required />
            <input type='submit' value='Post offer' />
        </StyledNewOfferPage>
    )
}

export default NewOfferPage;