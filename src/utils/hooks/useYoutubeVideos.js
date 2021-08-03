import { useState, useEffect } from 'react';
import { apiGet } from '../services/service';

export function useYoutubeVideos() {
  const [videos, setVideos] = useState([]);
  const [search, setSearch] = useState('');

  const getVideos = async (newSearch = '') => {
    const response = await apiGet('/search#video', {
      params: {
        q: newSearch,
        type: 'video',
      },
    });
    setVideos(response.data);
  };

  useEffect(() => {
    getVideos(search);
  }, [search]);

  return { videos, getNewVideos: setSearch };
}
