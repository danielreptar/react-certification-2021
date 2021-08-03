import React from 'react';
import { HomeTitle } from '../../assets/styles/views/home';
import Cards from '../../components/Cards/Cards';

const HomePage = ({ videos, handleSelectVideo }) => {
  const { items = [] } = videos;
  return (
    <section>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <Cards handleSelectVideo={handleSelectVideo} data={items} />
    </section>
  );
};

export default HomePage;
