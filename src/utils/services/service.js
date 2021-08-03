import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3/',
  params: {
    part: 'snippet',
    maxResults: 24,
    key: process.env.REACT_APP_YOUTUBE_API_KEY,
  },
});

export const apiGet = (url, params) => {
  return axiosInstance.get(url, params);
};
