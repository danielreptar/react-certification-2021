import React from 'react';

import { VideoSection } from '../../assets/styles/views/details';

import Video from '../../components/Video/Video';
import RelatedVideosList from '../../components/RelatedVideosList';

const DetailsPage = ({ video, handleSelectVideo }) => {
  return (
    <VideoSection>
      <Video video={video} />
      <RelatedVideosList handleSelectVideo={handleSelectVideo} />
    </VideoSection>
  );
};

export default DetailsPage;
