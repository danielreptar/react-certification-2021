import React from 'react';
import { HomeTitle } from '../../assets/styles/views/home';
import Cards from '../../components/Cards/Cards';
import data from '../../mock/data';

const HomePage = () => {
  const { items } = data;
  return (
    <section>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <Cards data={items} />
    </section>
  );
};

export default HomePage;
