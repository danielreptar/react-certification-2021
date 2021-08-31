import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import DetailsFavoritePage from '../../pages/DetailsFavorite';
import data from '../../mock/data';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';

const { items } = data;
const testId = 'nmXMgqjQzls';
const user = {
  user: null,
  error: true,
  message: '',
};

describe('DetailsFavoritesPage', () => {
  it('contains a video info', () => {
    render(
      <GlobalProvider
        value={{
          favorites: items,
          login: user,
        }}
      >
        <MemoryRouter initialEntries={[`video/favorites/${testId}`]}>
          <Route path="video/favorites/:id">
            <DetailsFavoritePage />
          </Route>
        </MemoryRouter>
      </GlobalProvider>
    );
    const {
      snippet: { title, description },
    } = items[0];
    const titleElement = screen.getByTestId(title);
    const descriptionElement = screen.queryByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
