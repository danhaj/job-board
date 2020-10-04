import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const StyledMyOffersPage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
    padding: 30px;    

    & > div {
        display: flex;
        width: 50%;
        justify-content: space-between;
        padding: 15px;
        margin: 10px 0;
        border: 1px solid #96031A;
    }

    span {
        cursor: pointer;
        padding: 3px;
        margin: 0 2px;
    }
`;

const MyOffersPage = () => {
    const [myOffers, setMyOffers] = useState([]);
    const user = useSelector(state => state.currentUser);

    useEffect(() => {
        axios.get(`http://localhost:1337/offers?company=${user.username}`)
        .then(res => setMyOffers(res.data));
    }, [user])

    const handleDelete = offer => {
        axios.delete(`http://localhost:1337/offers/${offer.id}`)
        .then(() => {
            const updatedMyOffers = myOffers.filter(myOffer => myOffer !== offer);
            setMyOffers(updatedMyOffers);
        });
    }

    return (
        <StyledMyOffersPage>
            {
                myOffers.length ?
                myOffers.map(offer => (
                    <div key={offer.id}>
                        <p>{ offer.title }</p>
                        <div>
                            <span>&#9998;</span>
                            <span onClick={() => handleDelete(offer)}>&#10005;</span>
                        </div>
                    </div>
                ))
                :
                'You have not posted any offers'
            }
        </StyledMyOffersPage>
    )
}

export default MyOffersPage;