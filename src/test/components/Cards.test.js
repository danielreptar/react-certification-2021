import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import Cards from '../../components/Cards';
import data from '../../mock/data';
import GlobalProvider from '../../providers/GlobalProvider/GlobalProvider';

const testData = data.items;
afterEach(cleanup);

describe('Cards', () => {
  it('renders a list of elements', () => {
    render(
      <GlobalProvider value={{ videos: testData }}>
        <Cards />
      </GlobalProvider>
    );
    const videoElements = screen.queryAllByRole('heading');
    const videoNames = videoElements.map((video) => video.textContent);
    const dataNames = testData
      .filter((video) => video.id.kind.includes('#video'))
      .map((video) => video.snippet.title);
    expect(videoNames).toEqual(dataNames);
  });
  it('no renders when the array is empty', () => {
    render(
      <GlobalProvider value={{ videos: [] }}>
        <Cards />
      </GlobalProvider>
    );
    const cardList = screen.queryByRole('list');
    expect(cardList).not.toBeInTheDocument();
  });
});
