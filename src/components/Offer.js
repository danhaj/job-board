import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentOffer } from '../redux/actions';

const StyledOffer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px 0;
  padding: 15px;
  border: 1px solid #96031a;
  cursor: pointer;

  &:hover {
    background-color: #96031a;
    transition-duration: 400ms;

    p {
      color: #e7e7e7;
      transition-duration: 400ms;
    }
  }

  & > p {
    font-size: 36px;
    font-weight: bold;

    @media (max-width: 768px) {
      font-size: 24px;
    }
  }
`;

const StyledOfferInformations = styled.div`
  display: flex;

  p {
    color: #6d676e;

    &:first-child {
      margin-right: 15px;
      font-weight: bold;
    }
  }
`;

const StyledDateText = styled.p`
  position: absolute;
  right: 50px;
`;

const Offer = ({ offer }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = currentOffer => {
    dispatch(setCurrentOffer(currentOffer));
    history.push(`/offer-details`);
  };

  const { title, company, city, dateString } = offer;

  return (
    <StyledOffer onClick={() => handleClick(offer)}>
      <p>{title}</p>
      <StyledOfferInformations>
        <p>{company}</p>
        <p>{city}</p>
      </StyledOfferInformations>
      <StyledDateText>{dateString}</StyledDateText>
    </StyledOffer>
  );
};

Offer.propTypes = {
  offer: PropTypes.shape({
    title: PropTypes.string,
    company: PropTypes.string,
    city: PropTypes.string,
    dateString: PropTypes.string,
  }).isRequired,
};

export default Offer;
