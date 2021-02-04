import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';

const StyledOfferDetailsPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 30px;

  hr {
    width: 200px;
    margin: 20px 0;
  }

  & > div {
    display: flex;
    width: 60%;
    flex-direction: column;
    align-items: center;
  }
`;

const StyledTitle = styled.p`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
`;

const OfferDetailsPage = () => {
  const offer = useSelector(state => state.currentOffer);
  const { title, city, description } = offer;

  return (
    <StyledOfferDetailsPage>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <p>{city}</p>
        <hr color='#96031A' />
        <p>{description}</p>
      </div>
    </StyledOfferDetailsPage>
  );
};

export default OfferDetailsPage;
