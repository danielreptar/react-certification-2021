import React from 'react';
import { HomeTitle } from '../../assets/styles/views/home';
import Cards from '../../components/Cards/Cards';

const HomePage = ({ handleSelectVideo }) => {
  return (
    <section>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <Cards handleSelectVideo={handleSelectVideo} />
    </section>
  );
};

export default HomePage;
