import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setOffers } from '../redux/actions';
import { firestore } from '../services/firebase';

import Offer from '../components/Offer';
import Filter from '../components/Filter';

const StyledOffersPage = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 30px;
`;

const OffersPage = () => {
  const offers = useSelector(state => state.offers);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchOffers = async () => {
      const temp = [];
      const res = await firestore
        .collection('offers')
        .orderBy('creationDate')
        .get();

      res.forEach(offer =>
        temp.push({
          ...offer.data(),
          dateString: offer.data().creationDate.toDate().toLocaleDateString(),
          id: offer.id,
        }),
      );

      dispatch(setOffers(temp));
    };

    fetchOffers();
  }, [dispatch]);

  return (
    <StyledOffersPage>
      <Filter />
      {offers.map(offer =>
        offer.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        offer.city.toLowerCase().includes(filter.city.toLowerCase()) ? (
          <Offer key={offer.id} offer={offer} />
        ) : null,
      )}
    </StyledOffersPage>
  );
};

export default OffersPage;
