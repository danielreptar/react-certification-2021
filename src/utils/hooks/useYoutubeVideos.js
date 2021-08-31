import { useState, useEffect, useCallback } from 'react';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import { apiGet } from '../services/service';

export function useYoutubeVideos() {
  const [search, setSearch] = useState('');
  const { setVideosCall } = useGlobalContext();

  const getVideos = useCallback(
    async (newSearch = '') => {
      const {
        data: { items },
      } = await apiGet('/search#video', {
        params: {
          q: newSearch,
          type: 'video',
        },
      });
      setVideosCall(items);
    },
    [setVideosCall]
  );

  useEffect(() => {
    getVideos(search);
  }, [search, getVideos]);

  return { getNewVideos: setSearch };
}
