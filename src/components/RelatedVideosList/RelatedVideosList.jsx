import React from 'react';
import {
  ListContainer,
  List,
  ListImage,
  ListItem,
  ListItemInfo,
  ListItemSeparator,
  ListItemTitle,
} from '../../assets/styles/components/relatedVideosList';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';

const RelatedVideo = ({ video, handleSelectVideo }) => {
  const {
    snippet: { title, thumbnails },
  } = video;
  return (
    <ListItem onClick={() => handleSelectVideo(video)}>
      <ListItemInfo>
        <ListImage src={thumbnails.medium.url} />
        <ListItemTitle>{title}</ListItemTitle>
      </ListItemInfo>
      <ListItemSeparator />
    </ListItem>
  );
};

const RelatedVideosList = ({ relatedVideos, handleSelectVideo }) => {
  const videos = relatedVideos.filter((video) => video.id.kind.includes('#video'));

  return (
    <ListContainer>
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <List>
          {videos.map((video) => (
            <RelatedVideo
              key={video.id.videoId}
              video={video}
              handleSelectVideo={handleSelectVideo}
            />
          ))}
        </List>
      </Scrollbars>
    </ListContainer>
  );
};

RelatedVideosList.propTypes = {
  relatedVideos: PropTypes.arrayOf(PropTypes.object),
  handleSelectVideo: PropTypes.func,
};
RelatedVideosList.defaultProps = {
  relatedVideos: [],
  handleSelectVideo: () => {},
};

export default RelatedVideosList;
