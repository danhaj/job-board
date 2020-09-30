import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setOffers } from '../redux/actions';
import styled from 'styled-components';

import Offers from '../components/Offers';
import Filter from '../components/Filter';

const StyledOffersPage = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    padding: 30px;
`;

const OffersPage = () => {
    const filter = useSelector(state => state.filter);
    const url = `http://localhost:1337/offers?title_contains=${filter.title}&city_contains=${filter.city}` ;

    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            console.log(url);
            const res = await fetch(url);
            const resJson = await res.json();
            dispatch(setOffers(resJson));
        }

        fetchData();
    }, [url, dispatch])

    return (
        <StyledOffersPage>
            <Filter />
            <Offers />
        </StyledOffersPage>
    )
}

export default OffersPage;