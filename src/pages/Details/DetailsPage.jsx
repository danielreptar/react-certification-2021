import React from 'react';

import { VideoSection } from '../../assets/styles/views/details';

import Video from '../../components/Video/Video';
import RelatedVideosList from '../../components/RelatedVideosList';

const DetailsPage = ({ video, relatedVideos, handleSelectVideo }) => {
  return (
    <VideoSection>
      <Video video={video} />
      <RelatedVideosList
        handleSelectVideo={handleSelectVideo}
        relatedVideos={relatedVideos}
      />
    </VideoSection>
  );
};

export default DetailsPage;
