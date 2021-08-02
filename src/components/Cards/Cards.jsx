import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CardsContainer } from '../../assets/styles/components/cards';

const Cards = ({ data, handleSelectVideo }) => {
  const videos = data ? data.filter((video) => video.id.kind.includes('#video')) : [];

  return (
    <CardsContainer>
      {videos.map((item) => (
        <Card handleSelectVideo={handleSelectVideo} key={item.id.videoId} item={item} />
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  handleSelectVideo: PropTypes.func,
};
Cards.defaultProps = {
  data: [],
  handleSelectVideo: () => {},
};

export default Cards;
