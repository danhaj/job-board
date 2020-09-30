import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setCurrentOffer } from '../redux/actions';
import styled from 'styled-components';

const StyledOffer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 5px 0;
    padding: 15px;
    border: 1px solid #96031A;
    cursor: pointer;

    &:hover {
        background-color: #96031A;
        transition-duration: 400ms;

        p {
            color: #E7E7E7;
            transition-duration: 400ms;
        }
    }

    & > p {
        font-size: 36px;
        font-weight: bold;
    }
`;

const StyledOfferInformations = styled.div`
    display: flex;

    p {
        color: #6D676E;

        &:first-child {
            margin-right: 15px;
            font-weight: bold;
        }
    }
`;

const Offer = ({ offer }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleClick = currentOffer => {
        dispatch(setCurrentOffer(currentOffer));
        history.push(`/offer-details`);
    }

    const { title, company, city } = offer;

    return (
        <StyledOffer onClick={() => handleClick(offer)}>
            <p>{ title }</p>
            <StyledOfferInformations>
                <p>{ company }</p>
                <p>{ city }</p>
            </StyledOfferInformations>
        </StyledOffer>
    )
}

export default Offer;