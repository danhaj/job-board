import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
  border: 1px solid #96031A;
  color: #E7E7E7;
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  
  &:hover {
    background-color: #96031A;
    transition-duration: 400ms;
  }
`;

const LandingPage = () => {

    return (
      <StyledLandingPage>
        <StyledLink to='/sign-in'>Sign In</StyledLink>
        <StyledLink to='/offers'>Watch job offers</StyledLink>
      </StyledLandingPage>  
    )
}

export default LandingPage;