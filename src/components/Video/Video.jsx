import React from 'react';
import ReactPlayer from 'react-player';
import {
  VideoContainer,
  VideoInfoContainer,
  VideoTitleContainer,
  VideoTitle,
  VideoText,
} from '../../assets/styles/components/video';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import { useVideoSizing } from '../../utils/hooks/useVideoSizing';
import Button from '../Button/Button';

const Video = ({ video }) => {
  const {
    id: { videoId },
    snippet: { title, description },
  } = video;

  const size = useVideoSizing();
  const {
    addToFavoritesCall,
    removeFromFavoritesCall,
    favoritesIDs,
    login,
  } = useGlobalContext();

  const isFavorite = (id) => {
    return favoritesIDs.includes(id) ? (
      <Button color="cancel" onClick={() => removeFromFavoritesCall(videoId)}>
        REMOVE FROM FAVORITES
      </Button>
    ) : (
      <Button onClick={() => addToFavoritesCall(video)}>ADD TO FAVORITES</Button>
    );
  };

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
        <VideoTitleContainer>
          <VideoTitle data-testid={title}>{title}</VideoTitle>
          {login.user && isFavorite(videoId)}
        </VideoTitleContainer>
        <VideoText>{description}</VideoText>
      </VideoInfoContainer>
    </VideoContainer>
  );
};

export default Video;
