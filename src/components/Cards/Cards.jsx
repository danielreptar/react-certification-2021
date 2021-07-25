import React from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import { CardsContainer } from '../../assets/styles/components/cards';

const Cards = ({ data }) => {
  const videos = data.filter((video) => video.id.kind.includes('#video'));

  return (
    <CardsContainer>
      {data.length
        ? videos.map((item) => <Card key={item.id.videoId} item={item} />)
        : null}
    </CardsContainer>
  );
};

Cards.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};
Cards.defaultProps = {
  data: [],
};

export default Cards;
