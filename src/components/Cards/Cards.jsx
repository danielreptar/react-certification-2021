import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CardsContainer } from '../../assets/styles/components/cards';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const Cards = ({ handleSelectVideo }) => {
  const { videos } = useGlobalContext();

  return (
    <CardsContainer>
      {videos.map((item) => (
        <Card handleSelectVideo={handleSelectVideo} key={item.id.videoId} item={item} />
      ))}
    </CardsContainer>
  );
};

Cards.propTypes = {
  handleSelectVideo: PropTypes.func,
};
Cards.defaultProps = {
  handleSelectVideo: () => {},
};

export default Cards;
