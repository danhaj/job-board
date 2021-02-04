import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentOffer } from '../redux/actions';
import { firestore } from '../services/firebase';

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
    border: 1px solid #96031a;

    @media (max-width: 768px) {
      width: 90%;
    }
  }

  button {
    cursor: pointer;
    margin: 0 2px;
    background: none;
    border: none;
    color: #e7e7e7;
    font-size: 16px;
  }
`;

const MyOffersPage = () => {
  const [myOffers, setMyOffers] = useState();
  const user = useSelector(state => state.currentUser);
  const dispatch = useDispatch();
  const history = useHistory();
  const offersRef = firestore.collection('offers');

  useEffect(() => {
    const unsubscribe = offersRef
      .where('author', '==', user.uid)
      .onSnapshot(snapshot => {
        const temp = [];
        snapshot.forEach(offer => {
          temp.push({
            ...offer.data(),
            id: offer.id,
          });
        });
        setMyOffers(temp);
      });

    return () => {
      unsubscribe();
    };
  });

  const handleEdit = offer => {
    dispatch(setCurrentOffer(offer));
    history.push('/edit-offer');
  };

  const handleDelete = offer => {
    offersRef.doc(offer.id).delete();
  };

  return (
    <StyledMyOffersPage>
      {myOffers
        ? myOffers.map(offer => (
            <div key={offer.id}>
              <p>{offer.title}</p>
              <div>
                <button type='button' onClick={() => handleEdit(offer)}>
                  &#9998;
                </button>
                <button type='button' onClick={() => handleDelete(offer)}>
                  &#10005;
                </button>
              </div>
            </div>
          ))
        : 'You have not posted any offers yet'}
    </StyledMyOffersPage>
  );
};

export default MyOffersPage;
