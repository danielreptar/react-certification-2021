import React from 'react';
import PropTypes from 'prop-types';
import {
  InputContainer,
  Icon,
  Background,
  InputStyled,
} from '../../assets/styles/components/input';
import { Search } from 'react-feather';

const Input = ({ type, placeholder }) => {
  return (
    <InputContainer>
      <InputStyled placeholder={placeholder} type={type} />
      <Icon>
        <Search width={16} />
      </Icon>
      <Background />
    </InputContainer>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
