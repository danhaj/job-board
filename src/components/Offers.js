import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import Offer from './Offer';

const StyledOffers = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    
`;

const Offers = () => {
    const offers = useSelector(state => state.offers);

    return (
        <StyledOffers>
            {
                offers ?
                offers.map(offer => <Offer key={offer.id} offer={offer} />)
                :
                ''
            }
        </StyledOffers>
    )
}

export default Offers;