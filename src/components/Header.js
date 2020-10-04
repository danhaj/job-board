import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setCurrentUser } from '../redux/actions';
import styled from 'styled-components';

const StyledHeader = styled.header`
    position: absolute;
    display: flex;
    width: 100%;
    height: 60px;
    justify-content: space-between;
    align-items: center;
    top: 0;
    padding: 15px;
    border-bottom: 1px solid #96031A;

    div {
        align-items: center;
        display: flex;
        gap: 10px;
    }

    button {
        width: 100px;
        font-family: Montserrat;
        text-align: center;
        color: #E7E7E7;
        background-color: transparent;
        border: 1px solid #96031A;
        padding: 5px;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: #96031A;
            transition-duration: 400ms;
        }
    }
`;

const StyledLogoLink = styled(Link)`
    letter-spacing: 3px;
    font-size: 20px;
    text-decoration: none;
    color: #E7E7E7;

    span {
        color: #96031A;
        font-weight: bold;
    }
`;

const StyledLink = styled(Link)`
    width: 100px;
    font-family: Montserrat;
    text-align: center;
    text-decoration: none;
    color: #E7E7E7;
    background-color: transparent;
    border: 1px solid #96031A;
    padding: 5px;
    font-size: 13px;
    font-weight: bold;
    cursor: pointer;

    &:hover {
        background-color: #96031A;
        transition-duration: 400ms;
    }
`;

const Header = () => {
    const user = useSelector(state => state.currentUser);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(setCurrentUser({}));
        localStorage.removeItem('user');
    }

    return (
        <StyledHeader>
            <StyledLogoLink to='/'>job<span>board</span></StyledLogoLink>
            {
                user.username ?
                <div>
                    <p>Hello <b>{ user.username }</b></p>
                    <StyledLink to='my-offers'>My offers</StyledLink>
                    <button onClick={logout}>Log out</button>
                </div>
                :
                <div>
                    <StyledLink to='sign-in'>Sign in</StyledLink>
                </div>
            }
        </StyledHeader>
    )
}

export default Header;