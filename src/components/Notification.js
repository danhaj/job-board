import React, { useRef } from 'react';
import styled from 'styled-components';

const StyledNotification = styled.div`
    background-color: #28282b;
    margin: 5px 0;
    padding: 5px 10px 25px 10px;
    ${({ width }) => width ? `width: ${width}` : ''};
    ${({ height }) => height ? `height: ${height}` : ''};

    p {
        white-space: pre-line;
    }
`;

const StyledHideButton = styled.div`
    width: 100%;
    text-align: right;

    span {
        cursor: pointer;
    }
`;

const Notification = ({ text, width, height }) => {
    const notification = useRef();

    const hideNotification = () => {
        notification.current.style.display = 'none';
    }

    return (
        <StyledNotification 
            ref={notification}
            width={width} 
            height={height}
        >
            <StyledHideButton onClick={hideNotification}>
                <span>&#10005;</span>
            </StyledHideButton>
            <p>{ text }</p>
        </StyledNotification>
    )
}


export default Notification;