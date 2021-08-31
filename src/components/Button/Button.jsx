import React from 'react';
import {
  ButtonCancel,
  ButtonPrimary,
  ButtonSuccess,
} from '../../assets/styles/components/button';

const Button = ({ children, color = 'primary', ...props }) => {
  const type = {
    success: <ButtonSuccess {...props}>{children}</ButtonSuccess>,
    primary: <ButtonPrimary {...props}>{children}</ButtonPrimary>,
    cancel: <ButtonCancel {...props}>{children}</ButtonCancel>,
  };

  return type[color];
};

export default Button;
