import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

const StyledToggleNavDiv = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 70px;
  height: 70px;
  z-index: 4;

  input {
    position: absolute;
    top: 2px;
    right: 5px;
    width: 50px;
    height: 50px;
    margin: 0;
    padding: 0;
    opacity: 0;
    z-index: 5;

    &:checked ~ span {
      &:nth-child(2) {
        transform: rotate(-45deg) translate(-4px, 10px);
        background-color: #e7e7e7;
      }

      &:nth-child(3) {
        opacity: 0;
      }

      &:nth-child(4) {
        transform: rotate(45deg) translate(-4px, -10px);
        background-color: #e7e7e7;
      }
    }
  }

  span {
    display: block;
    position: absolute;
    right: 15px;
    width: 35px;
    height: 3px;
    background-color: #e7e7e7;
    border-radius: 2px;
    z-index: 4;
    transition: all 0.5s ease;

    &:nth-child(2) {
      top: 15px;
    }

    &:nth-child(3) {
      top: 25px;
    }

    &:nth-child(4) {
      top: 35px;
    }
  }

  @media (min-width: 769px) and (min-height: 601px) {
    display: none;
  }
`;

const ToggleNav = ({ navRef }) => {
  const location = useLocation();
  const toggleInput = useRef(null);
  const nav = navRef.current;

  useEffect(() => {
    if (toggleInput.current.checked) {
      toggleInput.current.checked = false;
      nav.style.opacity = '0';
      nav.style.zIndex = '-1';
    }
  }, [nav, location]);

  const toggleNav = ({ checked }) => {
    if (checked) {
      nav.style.opacity = '1';
      nav.style.zIndex = '2';
    } else {
      nav.style.opacity = '0';
      nav.style.zIndex = '-1';
    }
  };

  return (
    <StyledToggleNavDiv>
      <input
        ref={toggleInput}
        type='checkbox'
        onClick={ev => toggleNav(ev.target)}
      />
      <span />
      <span />
      <span />
    </StyledToggleNavDiv>
  );
};

ToggleNav.propTypes = {
  navRef: PropTypes.shape({
    current: PropTypes.instanceOf(HTMLElement),
  }).isRequired,
};

export default ToggleNav;
