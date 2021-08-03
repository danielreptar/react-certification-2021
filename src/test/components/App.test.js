import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../../components/App';

beforeEach(() => {
  render(<App />);
});

describe('App', () => {
  it('contains a title', () => {
    const titleElement = screen.queryByText('Welcome to the Challenge!');

    expect(titleElement).toBeInTheDocument();
  });
});
