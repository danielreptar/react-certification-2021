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
import { useHistory } from 'react-router';

const RelatedVideo = ({ video, itemPath }) => {
  const history = useHistory();
  const {
    id: { videoId },
    snippet: { title, thumbnails },
  } = video;

  const handleSelectVideo = (id) => {
    const videoPath = `${itemPath}${id}`;
    history.push(videoPath);
  };
  return (
    <ListItem onClick={() => handleSelectVideo(videoId)}>
      <ListItemInfo>
        <ListImage src={thumbnails.medium.url} />
        <ListItemTitle>{title}</ListItemTitle>
      </ListItemInfo>
      <ListItemSeparator />
    </ListItem>
  );
};

const RelatedVideosList = ({ relatedVideos, itemPath }) => {
  return (
    <ListContainer>
      <Scrollbars style={{ width: '100%', height: '100%' }}>
        <List>
          {relatedVideos.map((video) => (
            <RelatedVideo itemPath={itemPath} key={video.id.videoId} video={video} />
          ))}
        </List>
      </Scrollbars>
    </ListContainer>
  );
};

RelatedVideosList.propTypes = {
  relatedVideos: PropTypes.arrayOf(PropTypes.object),
  itemPath: PropTypes.string,
};
RelatedVideosList.defaultProps = {
  relatedVideos: [],
  itemPath: '/',
};

export default RelatedVideosList;
