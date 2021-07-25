import React from 'react';
import { render, screen } from '@testing-library/react';

import Input from '../../components/Input/Input';

describe('Input', () => {
  it('renders a placeholder and type', () => {
    const typeInput = 'text';
    const placeholder = 'placeholder test';
    render(<Input type={typeInput} placeholder={placeholder} />);
    const inputElement = screen.getByPlaceholderText('placeholder test');

    expect(inputElement.placeholder).toEqual('placeholder test');
    expect(inputElement.type).toEqual('text');
  });
});
