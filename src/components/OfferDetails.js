import React from 'react';
import { useSelector } from 'react-redux';

const Details = () => {
    const offer = useSelector(state => state.currentOffer);

    return (
        <div>
            {
                offer.title
            }
        </div>
    )
}

export default Details;