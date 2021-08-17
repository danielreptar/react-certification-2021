import React from 'react';
import ReactPlayer from 'react-player';
import {
  VideoContainer,
  VideoInfoContainer,
  VideoTitle,
  VideoText,
} from '../../assets/styles/components/video';
import { useVideoSizing } from '../../utils/hooks/useVideoSizing';

const Video = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, description },
  } = video;

  const size = useVideoSizing();

  return (
    <VideoContainer>
      <ReactPlayer
        config={{
          youtube: {
            playerVars: { showinfo: 1 },
          },
        }}
        playing
        controls
        width="100%"
        height={size}
        volume={0.25}
        url={`https://www.youtube.com/watch?v=${videoId}`}
      />

      <VideoInfoContainer>
        <VideoTitle data-testid={title}>{title}</VideoTitle>
        <VideoText>{description}</VideoText>
      </VideoInfoContainer>
    </VideoContainer>
  );
};

export default Video;
