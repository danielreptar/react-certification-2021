import React from 'react';
import { render, screen } from '@testing-library/react';

import HorizontalMenu from '../../components/HorizontalMenu';

describe('HorizontalMenu', () => {
  it('renders an input', () => {
    render(<HorizontalMenu />);
    const inputElement = screen.getByPlaceholderText('Search...');
    const dropdownElement = screen.queryByText('Login');

    expect(inputElement.placeholder).toEqual('Search...');
    expect(dropdownElement).toBeInTheDocument('Login');
  });
});
