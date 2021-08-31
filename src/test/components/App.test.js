import React from 'react';
import { render, screen } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import data from '../../mock/data';

import App from '../../components/App';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';
import { theme } from '../../assets/styles/theme';

const testData = data.items;
const user = {
  user: null,
  error: true,
  message: '',
};
const modal = {
  isOpen: false,
};
const loadFavoritesCall = () => {};
const loadUserCall = () => {};
const loadThemeCall = () => {};

describe('App', () => {
  it('contains a title', () => {
    const history = createMemoryHistory();
    history.push('/');
    render(
      <GlobalProvider
        value={{
          videos: testData,
          login: user,
          theme: theme.lightTheme,
          modal,
          loadFavoritesCall,
          loadUserCall,
          loadThemeCall,
        }}
      >
        <Router history={history}>
          <App />
        </Router>
      </GlobalProvider>
    );
    const titleElement = screen.queryByText('Welcome to the Challenge!');

    expect(titleElement).toBeInTheDocument();
  });
});
