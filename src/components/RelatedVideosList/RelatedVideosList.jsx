import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars';
import PropTypes from 'prop-types';
import {
  ListContainer,
  List,
  ListImage,
  ListItem,
  ListItemInfo,
  ListItemSeparator,
  ListItemTitle,
} from '../../assets/styles/components/relatedVideosList';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

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

const RelatedVideosList = ({ handleSelectVideo }) => {
  const { videos } = useGlobalContext();

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
  handleSelectVideo: PropTypes.func,
};
RelatedVideosList.defaultProps = {
  handleSelectVideo: () => {},
};

export default RelatedVideosList;
