import React from 'react';
import { render, screen } from '@testing-library/react';

import Card from '../../components/Card';

const testItem = {
  id: { videoId: 'testId' },
  snippet: {
    title: 'Video Test',
    description: 'Video test text',
    thumbnails: {
      default: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/default.jpg',
        width: 120,
        height: 90,
      },
      medium: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
        width: 320,
        height: 180,
      },
      high: {
        url: 'https://i.ytimg.com/vi/nmXMgqjQzls/hqdefault.jpg',
        width: 480,
        height: 360,
      },
    },
  },
};

beforeEach(() => {
  render(<Card item={testItem} />);
});

describe('Card', () => {
  it('renders title, text and image', () => {
    const titleElement = screen.getByText('Video Test');
    const textElement = screen.getByText('Video test text');
    const imageElement = screen.getByRole('img', {
      src: 'https://i.ytimg.com/vi/nmXMgqjQzls/mqdefault.jpg',
    });

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
    expect(imageElement).toBeInTheDocument();
  });
});
