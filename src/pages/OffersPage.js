import React, { useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { setOffers } from '../redux/actions';
import styled from 'styled-components';

import Offers from '../components/Offers';
import Filter from '../components/Filter';
import Notification from '../components/Notification';

const StyledOffersPage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 30px;
`;

const OffersPage = () => {
    const filter = useSelector(state => state.filter);
    const url = `https://strapi-job-board.herokuapp.com/offers?title_contains=${filter.title}&city_contains=${filter.city}` ;

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get(url)
        .then(res => {
            dispatch(setOffers(res.data));
        })
        .catch(() => alert('error'))
    }, [url, dispatch])

    return (
        <StyledOffersPage>
            <Notification 
                text="Strapi server is deployed on Heroku and first connection with database may take a while."
                width="100%"
            />
            <Filter />
            <Offers />
        </StyledOffersPage>
    )
}

export default OffersPage;