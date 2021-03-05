import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';

const StyledOfferDetailsPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding-top: 30px;

  hr {
    width: 200px;
    margin: 15px 0;
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
  margin-bottom: 10px;
`;

const StyledCity = styled.p`
  font-weight: bold;
  font-size: 20px;
`;

const OfferDetailsPage = () => {
  const offer = useSelector(state => state.currentOffer);
  if (!offer) return <Redirect to='/offers' />;

  const { title, city, description, dateString } = offer;

  return (
    <StyledOfferDetailsPage>
      <div>
        <StyledTitle>{title}</StyledTitle>
        <p>{dateString}</p>
        <StyledCity>{city}</StyledCity>
        <hr color='#96031A' />
        <p>{description}</p>
      </div>
    </StyledOfferDetailsPage>
  );
};

export default OfferDetailsPage;
