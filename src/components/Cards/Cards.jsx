import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CardsContainer } from '../../assets/styles/components/cards';

const Cards = ({ videos, itemPath }) => {
  return (
    <CardsContainer>
      {videos.map((item) => (
        <Card key={item.id.videoId} itemPath={itemPath} item={item} />
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.object),
  itemPath: PropTypes.string,
};
Cards.defaultProps = {
  videos: [],
  itemPath: '/',
};

export default Cards;
