import React from 'react';
import { render, screen } from '@testing-library/react';

import HorizontalMenu from '../../components/HorizontalMenu';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';
import { theme } from '../../assets/styles/theme';

describe('HorizontalMenu', () => {
  it('renders an input', () => {
    render(
      <GlobalProvider value={{ search: '', theme: theme.lightTheme }}>
        <HorizontalMenu />
      </GlobalProvider>
    );
    const inputElement = screen.getByPlaceholderText('Search...');
    const dropdownElement = screen.queryByText('Login');

    expect(inputElement.placeholder).toEqual('Search...');
    expect(dropdownElement).toBeInTheDocument('Login');
  });
  it('renders an input with a value', () => {
    render(
      <GlobalProvider value={{ theme: theme.lightTheme }}>
        <HorizontalMenu search="test" />
      </GlobalProvider>
    );
    const inputElement = screen.getByRole('textbox');

    expect(inputElement.value).toEqual('test');
  });
});
