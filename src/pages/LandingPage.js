import React from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const StyledLandingPage = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  display: block;
  width: 300px;
  padding: 15px 0;
  margin: 5px 0;
  background-color: transparent;
  border: 1px solid #96031a;
  color: #e7e7e7;
  font-weight: bold;
  text-align: center;
  text-decoration: none;

  &:hover {
    background-color: #96031a;
    transition-duration: 400ms;
  }
`;

const LandingPage = () => {
  const user = useSelector(state => state.currentUser);

  return (
    <StyledLandingPage>
      {user ? (
        <StyledLink to='/new-offer'>Post a new offer</StyledLink>
      ) : (
        <StyledLink to='/sign-in'>Sign In</StyledLink>
      )}
      <StyledLink to='/offers'>Watch job offers</StyledLink>
    </StyledLandingPage>
  );
};

export default LandingPage;
