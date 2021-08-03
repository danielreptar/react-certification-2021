import { renderHook } from '@testing-library/react-hooks';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { useYoutubeVideos } from '../../utils/hooks/useYoutubeVideos';
import data from '../../mock/data';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 24,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

describe('useYoutubeVideos', () => {
  it('Get a initial list of videos', async () => {
    const mock = new MockAdapter(axiosInstance);
    const url = 'https://www.googleapis.com/youtube/v3/';
    mock.onGet(url).reply(200, data);

    const { result } = renderHook(() => useYoutubeVideos());

    expect(result.current.videos).toEqual([]);
  });
  it('Get a list of related videos with the search', () => {});
});
