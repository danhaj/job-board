import React, { useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom'; 
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { firestore } from '../services/firebase';

import Form from '../components/Form';

const StyledEditOfferPage = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const EditOfferPage = () => {
    const offer = useSelector(state => state.currentOffer);
    const history = useHistory();
    const title = useRef();
    const city = useRef();
    const description = useRef();
    
    useEffect(() => {
        if(offer) {
            title.current.value = offer.title;
            city.current.value = offer.city;
            description.current.value = offer.description;
        }
    }, [offer])

    const handleSubmit = ev => {
        ev.preventDefault();

        const updatedOffer = {
            title: title.current.value,
            city: city.current.value,
            description: description.current.value
        }
        
        firestore.collection('offers').doc(offer.id).update({
            ...updatedOffer
        }).then(() => {
            history.push('/my-offers');
        })
    }

    return (
        <StyledEditOfferPage>
            <Form onSubmit={handleSubmit}>
                <input ref={title} type='text' required />
                <input ref={city} type='text' required />
                <textarea ref={description} placeholder='Description' required />
                <input type='submit' value='Update offer' />
            </Form>
        </StyledEditOfferPage>
    )
}

export default EditOfferPage;