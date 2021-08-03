import React from 'react';
import { render, screen } from '@testing-library/react';

import Video from '../../components/Video';

const testItem = {
  id: {
    kind: 'youtube#video',
    videoId: 'nmXMgqjQzls',
  },
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
  render(<Video video={testItem} />);
});

describe('Video', () => {
  it('renders title, text and image', () => {
    const titleElement = screen.getByText('Video Test');
    const textElement = screen.getByText('Video test text');

    expect(titleElement).toBeInTheDocument();
    expect(textElement).toBeInTheDocument();
  });
});
