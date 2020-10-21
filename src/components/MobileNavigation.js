import React, { useRef } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ToggleNav from './ToggleNav';
import LogOut from './LogOut';

const StyledMobileNavigation = styled.nav`
    display: none;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: #1B1B1E;
        transition: all 400ms ease;
        opacity: 0;
        z-index: -1;

        button {
            width: 100%;
            padding: 15px 0;
            border: none;
            border-top: 1px solid #96031A;
            border-bottom: 1px solid #96031A;
            font-family: 'Montserrat';
            font-weight: bold;
            font-size: 16px;
            background-color: #1B1B1E;
            color: #E7E7E7;
        }
    }
`;

const StyledLink = styled(Link)`
    display: block;
    width: 100%;
    padding: 15px 0;
    border-top: 1px solid #28282b;
    color: #E7E7E7;
    text-decoration: none;
    text-align: center;
    font-weight: bold;

    &:last-child {
        border-bottom: 1px solid #28282b;
    }
`;

const MobileNavigation = () => {
    const nav = useRef()
    const user = useSelector(state => state.currentUser);
    
    return (
        <>
            <ToggleNav nav={nav} />
            <StyledMobileNavigation ref={nav}>
                {
                    user.username ?
                    <>
                        <StyledLink to='/'>Home</StyledLink>
                        <StyledLink to='/offers'>Watch offers</StyledLink>
                        <StyledLink to='/my-offers'>My offers</StyledLink>
                        <StyledLink to='/new-offer'>Post a new offer</StyledLink>
                        <LogOut />
                    </>
                    :
                    <>
                        <StyledLink to='/'>Home</StyledLink>
                        <StyledLink to='/offers'>Watch offers</StyledLink>
                        <StyledLink to='/sign-in'>Sign in</StyledLink>
                    </>
                }
            </StyledMobileNavigation>
        </>
    )
}

export default MobileNavigation;