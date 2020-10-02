import React from 'react';
import { useSelector } from 'react-redux';

const OfferDetailsPage = () => {
    const offer = useSelector(state => state.currentOffer);

    return (
        <div>
            {
                offer.title
            }
        </div>
    )
}

export default OfferDetailsPage;