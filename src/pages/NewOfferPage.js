import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { auth, firestore } from '../services/firebase';

import Form from '../components/Form';

const StyledNewOfferPage = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const NewOfferPage = () => {
  const title = useRef();
  const city = useRef();
  const description = useRef();
  const history = useHistory();
  const user = useSelector(state => state.currentUser);

  const handleSubmit = async ev => {
    ev.preventDefault();

    const newOffer = {
      title: title.current.value,
      city: city.current.value,
      description: description.current.value,
      author: user.uid,
      company: user.displayName || auth.currentUser.displayName,
      creationDate: new Date(),
    };

    await firestore.collection('offers').add(newOffer);

    history.push('/offers');
  };

  return (
    <StyledNewOfferPage>
      <Form onSubmit={handleSubmit}>
        <input ref={title} type='text' placeholder='Title' required />
        <input ref={city} type='text' placeholder='City' required />
        <textarea ref={description} placeholder='Description' required />
        <input type='submit' value='Post offer' />
      </Form>
    </StyledNewOfferPage>
  );
};

export default NewOfferPage;
