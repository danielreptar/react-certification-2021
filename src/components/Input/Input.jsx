import React from 'react';
import PropTypes from 'prop-types';

import {
  InputContainer,
  Icon,
  Background,
  InputStyled,
} from '../../assets/styles/components/input';

const Input = ({ search, type, placeholder, handleKeyPress, handleSearch, children }) => {
  return (
    <InputContainer>
      <InputStyled
        value={search}
        onKeyDown={handleKeyPress}
        onChange={(event) => handleSearch(event.target.value)}
        placeholder={placeholder}
        type={type}
      />
      <Icon>{children}</Icon>
      <Background />
    </InputContainer>
  );
};

Input.propTypes = {
  search: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  handleSearch: PropTypes.func,
  handleKeyPress: PropTypes.func,
};
Input.defaultProps = {
  search: '',
  type: 'text',
  placeholder: '',
  handleSearch: () => {},
  handleKeyPress: () => {},
};

export default Input;
