import React from 'react';
import { render, screen } from '@testing-library/react';

import HomePage from '../../pages/Home';
import data from '../../mock/data';

beforeEach(() => {
  render(<HomePage videos={data} />);
});

describe('HomeView', () => {
  it('contains a title', () => {
    const titleElement = screen.queryByText('Welcome to the Challenge!');

    expect(titleElement).toBeInTheDocument();
  });
});
