import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route } from 'react-router-dom';

import DetailsPage from '../../pages/Details';
import data from '../../mock/data';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';

const { items } = data;
const testId = 'nmXMgqjQzls';
const user = {
  user: null,
  error: true,
  message: '',
};

describe('DetailsPage', () => {
  it('contains a video info', () => {
    render(
      <GlobalProvider
        value={{
          videos: items,
          login: user,
        }}
      >
        <MemoryRouter initialEntries={[`video/${testId}`]}>
          <Route path="video/:id">
            <DetailsPage />
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
