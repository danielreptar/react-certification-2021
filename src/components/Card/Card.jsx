import React from 'react';
import PropTypes, { string } from 'prop-types';
import {
  CardContainer,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from '../../assets/styles/components/card';
import { useHistory } from 'react-router';

const Card = ({ item, itemPath }) => {
  const history = useHistory();
  const {
    id: { videoId },
    snippet: { title, description, thumbnails },
  } = item;

  const handleSelectVideo = (id) => {
    const videoPath = `${itemPath}${id}`;
    history.push(videoPath);
  };
  return (
    <CardContainer onClick={() => handleSelectVideo(videoId)}>
      <CardImage src={thumbnails.medium.url} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
      </CardBody>
    </CardContainer>
  );
};

Card.propTypes = {
  item: PropTypes.shape({
    kind: PropTypes.string,
    etag: PropTypes.string,
    id: PropTypes.objectOf(PropTypes.string),
    snippet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
  itemPath: string,
};
Card.defaultProps = {
  itemPath: '/',
};

export default Card;
