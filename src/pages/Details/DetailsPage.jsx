import React, { useCallback, useMemo } from 'react';

import { VideoSection } from '../../assets/styles/views/details';

import Video from '../../components/Video/Video';
import RelatedVideosList from '../../components/RelatedVideosList';
import { useParams } from 'react-router';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const DetailsPage = () => {
  const { id } = useParams();
  const { videos } = useGlobalContext();

  const getVideo = useCallback(
    (videoId) => {
      return videos.find((video) => video.id.videoId === videoId);
    },
    [videos]
  );
  const pageVideo = useMemo(() => getVideo(id), [id, getVideo]);

  return (
    <VideoSection>
      {pageVideo && <Video video={pageVideo} />}
      <RelatedVideosList itemPath="/video/" relatedVideos={videos} />
    </VideoSection>
  );
};

export default DetailsPage;
