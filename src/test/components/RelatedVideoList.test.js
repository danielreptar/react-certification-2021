import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';

import RelatedVideosList from '../../components/RelatedVideosList';
import data from '../../mock/data';

const testData = data.items;

afterEach(cleanup);

describe('RelatedVideosList', () => {
  it('renders a list of elements', () => {
    render(<RelatedVideosList relatedVideos={testData} />);
    const videoElements = screen.queryAllByRole('heading');
    const videoNames = videoElements.map((video) => video.textContent);

    const dataNames = testData
      .filter((video) => video.id.kind.includes('#video'))
      .map((video) => video.snippet.title);

    expect(videoNames).toEqual(dataNames);
  });
  it('no renders when the array is empty', () => {
    render(<RelatedVideosList />);
    const itemsList = screen.queryAllByRole('listitem');
    expect(itemsList.length).toBe(0);
  });
});
