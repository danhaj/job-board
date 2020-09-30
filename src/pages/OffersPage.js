import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setOffers } from '../redux/actions';
import styled from 'styled-components';

import Offers from '../components/Offers';

const StyledOffersPage = styled.div`
    display: flex;
`;

const OffersPage = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch('http://localhost:1337/offers');
            const resJson = await res.json();
            dispatch(setOffers(resJson));
        }

        fetchData();
    }, [dispatch])

    return (
        <StyledOffersPage>
            <Offers />
        </StyledOffersPage>
    )
}

export default OffersPage;