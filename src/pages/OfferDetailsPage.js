import React from 'react';
import { useSelector } from 'react-redux';

const OfferDetails = () => {
    const offer = useSelector(state => state.currentOffer);

    return (
        <div>
            {
                offer.title
            }
        </div>
    )
}

export default OfferDetails;