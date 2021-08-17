import { useState, useEffect } from 'react';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import { apiGet } from '../services/service';

export function useYoutubeVideos() {
  const [search, setSearch] = useState('');
  const { setVideosCall } = useGlobalContext();

  const getVideos = async (newSearch = '') => {
    const {
      data: { items },
    } = await apiGet('/search#video', {
      params: {
        q: newSearch,
        type: 'video',
      },
    });
    setVideosCall(items);
  };

  useEffect(() => {
    getVideos(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return { getNewVideos: setSearch };
}
