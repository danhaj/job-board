import React, { useRef } from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from '../redux/actions';

const StyledFilter = styled.div`
  margin-bottom: 5px;

  input,
  button {
    width: 200px;
    font-family: Montserrat;
    text-align: center;
    color: #e7e7e7;
    background-color: transparent;
    border: 1px solid #96031a;
    padding: 5px;

    @media (max-width: 768px) {
      width: 100%;
      margin-bottom: 5px;
    }
  }

  input {
    margin-right: 10px;

    @media (max-width: 768px) {
      margin-right: 0;
    }
  }

  button {
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #96031a;
      transition-duration: 400ms;
    }
  }
`;

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const titleFilter = useRef();
  const cityFilter = useRef();

  const handleClick = () => {
    const newFilter = {
      title: titleFilter.current.value,
      city: cityFilter.current.value,
    };

    dispatch(setFilter(newFilter));
  };

  return (
    <StyledFilter>
      <input
        ref={titleFilter}
        type='text'
        placeholder='Title'
        defaultValue={filter.title}
      />
      <input
        ref={cityFilter}
        type='text'
        placeholder='City'
        defaultValue={filter.city}
      />
      <button type='button' onClick={() => handleClick()}>
        Filter
      </button>
    </StyledFilter>
  );
};

export default Filter;
