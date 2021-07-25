import React from 'react';
import PropTypes from 'prop-types';
import {
  CardContainer,
  CardBody,
  CardImage,
  CardTitle,
  CardText,
} from '../../assets/styles/components/card';

const Card = ({ item }) => {
  const {
    snippet: { title, description, thumbnails },
  } = item;
  return (
    <CardContainer>
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
};

export default Card;
