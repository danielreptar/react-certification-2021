import React, { useCallback, useMemo } from 'react';

import { VideoSection } from '../../assets/styles/views/details';

import Video from '../../components/Video/Video';
import RelatedVideosList from '../../components/RelatedVideosList';
import { useParams } from 'react-router';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const DetailsFavorite = () => {
  const { id } = useParams();
  const { favorites } = useGlobalContext();

  const getVideo = useCallback(
    (videoId) => {
      return favorites.find((video) => video.id.videoId === videoId);
    },
    [favorites]
  );
  const pageVideo = useMemo(() => getVideo(id), [id, getVideo]);

  return (
    <VideoSection>
      {pageVideo && <Video video={pageVideo} />}
      <RelatedVideosList itemPath="/video/favorites/" relatedVideos={favorites} />
    </VideoSection>
  );
};

export default DetailsFavorite;
