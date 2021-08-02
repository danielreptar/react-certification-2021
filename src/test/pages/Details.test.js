import React from 'react';
import { render, screen } from '@testing-library/react';

import DetailsPage from '../../pages/Details';
import data from '../../mock/data';

const { items } = data;

beforeEach(() => {
  render(<DetailsPage video={items[0]} relatedVideos={items} />);
});

describe('DetailsPage', () => {
  it('contains a video info', () => {
    const {
      snippet: { title, description },
    } = items[0];
    const titleElement = screen.getByTestId(title);
    const descriptionElement = screen.queryByText(description);

    expect(titleElement).toBeInTheDocument();
    expect(descriptionElement).toBeInTheDocument();
  });
});
