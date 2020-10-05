import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentOffer } from '../redux/actions';
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

        @media (max-width: 768px) {
            width: 90%;
        }
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
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        if(!user.username) history.push('/sign-in');

        axios.get(`http://localhost:1337/offers?company=${user.username}`)
        .then(res => setMyOffers(res.data));
    }, [user, history])

    const handleEdit = offer => {
        dispatch(setCurrentOffer(offer));
        history.push('/edit-offer');
    }

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
                            <span onClick={() => handleEdit(offer)}>&#9998;</span>
                            <span onClick={() => handleDelete(offer)}>&#10005;</span>
                        </div>
                    </div>
                ))
                :
                'You have not posted any offers yet'
            }
        </StyledMyOffersPage>
    )
}

export default MyOffersPage;