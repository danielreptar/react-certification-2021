import React from 'react';
import { HomeTitle } from '../../assets/styles/views/home';
import Cards from '../../components/Cards/Cards';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const HomePage = () => {
  const { videos } = useGlobalContext();

  return (
    <section>
      <HomeTitle>Welcome to the Challenge!</HomeTitle>
      <Cards itemPath="/video/" videos={videos} />
    </section>
  );
};

export default HomePage;
