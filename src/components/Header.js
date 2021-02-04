import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import MobileNavigation from './MobileNavigation';
import LogOut from './LogOut';

const StyledHeader = styled.header`
  position: absolute;
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  padding: 15px;
  border-bottom: 1px solid #28282b;

  div {
    align-items: center;
    display: flex;
    gap: 10px;

    @media (max-width: 768px) {
      display: none;
    }
  }

  button {
    width: 150px;
    font-family: Montserrat;
    text-align: center;
    color: #e7e7e7;
    background-color: transparent;
    border: 1px solid #28282b;
    padding: 5px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #28282b;
      transition-duration: 400ms;
    }
  }
`;

const StyledLogoLink = styled(Link)`
  letter-spacing: 3px;
  font-size: 20px;
  text-decoration: none;
  color: #e7e7e7;

  span {
    color: #96031a;
    font-weight: bold;
  }
`;

const StyledLink = styled(Link)`
  width: 150px;
  font-family: Montserrat;
  text-align: center;
  text-decoration: none;
  color: #e7e7e7;
  background-color: transparent;
  border: 1px solid #28282b;
  padding: 5px;
  font-size: 13px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: #28282b;
    transition-duration: 400ms;
  }
`;

const Header = () => {
  const user = useSelector(state => state.currentUser);

  return (
    <>
      <MobileNavigation />
      <StyledHeader>
        <StyledLogoLink to='/'>
          job
          <span>board</span>
        </StyledLogoLink>
        {user ? (
          <div>
            <p>
              Hello
              <b> {user.email}</b>
            </p>
            <StyledLink to='/new-offer'>Post a new offer</StyledLink>
            <StyledLink to='/my-offers'>My offers</StyledLink>
            <LogOut />
          </div>
        ) : (
          <div>
            <StyledLink to='/sign-in'>Sign in</StyledLink>
            <StyledLink to='/sign-up'>Sign up</StyledLink>
          </div>
        )}
      </StyledHeader>
    </>
  );
};

export default Header;
