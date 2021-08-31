import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import Favorites from '../../pages/Favorites';
import data from '../../mock/data';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';

const { items } = data;

describe('Favorites', () => {
  it('contains a list of favorites videos', () => {
    render(
      <GlobalProvider
        value={{
          favorites: items,
        }}
      >
        <MemoryRouter initialEntries={[`/favorites`]}>
          <Route path="/favorites">
            <Favorites />
          </Route>
        </MemoryRouter>
      </GlobalProvider>
    );

    const videoElements = screen.queryAllByRole('heading');
    const videoNames = videoElements.map((video) => video.textContent);
    const dataNames = items
      .filter((video) => video.id.kind.includes('#video'))
      .map((video) => video.snippet.title);

    expect(videoNames).toEqual(dataNames);
  });
});
