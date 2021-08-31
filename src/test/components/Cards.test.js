import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Cards from '../../components/Cards';
import data from '../../mock/data';

const testData = data.items;
afterEach(cleanup);

describe('Cards', () => {
  it('renders a list of elements', () => {
    render(<Cards videos={testData} />);
    const videoElements = screen.queryAllByRole('heading');
    const videoNames = videoElements.map((video) => video.textContent);
    const dataNames = testData
      .filter((video) => video.id.kind.includes('#video'))
      .map((video) => video.snippet.title);

    expect(videoNames).toEqual(dataNames);
  });
  it('no renders when the array is empty', () => {
    render(<Cards />);
    const cardList = screen.queryByRole('list');
    expect(cardList).not.toBeInTheDocument();
  });
});
