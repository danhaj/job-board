import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';
import styled from 'styled-components';

const StyledFilter = styled.div`
    margin-bottom: 5px;

    input, button {
        width: 200px;
        font-family: Montserrat;
        text-align: center;
        color: #E7E7E7;
        background-color: transparent;
        border: 1px solid #96031A;
        padding: 5px;
    }

    input {
        margin-right: 10px;
    }

    button {
        font-weight: bold;
        cursor: pointer;

        &:hover {
            background-color: #96031A;
            transition-duration: 400ms;
        }
    }
`

const Filter = () => {
    const titleFilter = useRef();
    const cityFilter = useRef();
    const dispatch = useDispatch();

    const handleClick = () => {
        const filter = {
            title: titleFilter.current.value,
            city: cityFilter.current.value
        }

        dispatch(setFilter(filter));
    }

    return (
        <StyledFilter>
            <input ref={titleFilter} type='text' placeholder='Title' />
            <input ref={cityFilter} type='text' placeholder='City' />
            <button onClick={() => handleClick()}>Filter</button>
        </StyledFilter>
    )
}

export default Filter;