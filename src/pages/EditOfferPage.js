import React, { useEffect, useRef } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledEditOfferPage = styled.form`
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
`;


const EditOfferPage = () => {
    const user = useSelector(state => state.currentUser);
    const offer = useSelector(state => state.currentOffer);
    const history = useHistory();
    const title = useRef();
    const city = useRef();
    const description = useRef();
    
    useEffect(() => {
        if(!user.username) history.push('/sign-in');

        if(offer.id) {
            title.current.value = offer.title;
            city.current.value = offer.city;
            description.current.value = offer.description;
        }
    }, [offer, history, user])

    const handleSubmit = ev => {
        ev.preventDefault();

        axios.put(`http://localhost:1337/offers/${offer.id}`, {
            title: title.current.value,
            city: city.current.value,
            description: description.current.value
        })
        .then(() => history.push('/my-offers'))
        
    }

    return (
        <StyledEditOfferPage onSubmit={handleSubmit}>
            {
                offer.id ?
                <>
                    <input ref={title} type='text' required />
                    <input ref={city} type='text' required />
                    <textarea ref={description} placeholder='Description' required />
                    <input type='submit' value='Update offer' />
                </>
                :
                'Select offer first'

            }
        </StyledEditOfferPage>
    )
}

export default EditOfferPage;