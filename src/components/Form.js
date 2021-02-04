import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  input {
    width: 300px;
    padding: 15px 0;
    margin: 5px 0;
    font-family: 'Montserrat';
    font-size: 16px;
    text-align: center;
    color: #e7e7e7;
    background-color: transparent;
    border: 1px solid #96031a;

    &[type='submit'] {
      font-weight: bold;
      cursor: pointer;

      &:hover {
        background-color: #96031a;
        transition-duration: 400ms;
      }
    }
  }

  textarea {
    width: 300px;
    height: 300px;
    padding: 15px 0;
    margin: 5px 0;
    font-family: 'Montserrat';
    font-size: 16px;
    text-align: center;
    color: #e7e7e7;
    background-color: transparent;
    border: 1px solid #96031a;
  }
`;

const Form = ({ children, onSubmit }) => (
  <StyledForm onSubmit={onSubmit}>{children}</StyledForm>
);

Form.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Form;
