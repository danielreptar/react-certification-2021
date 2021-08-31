import React from 'react';
import Cards from '../../components/Cards/Cards';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';

const Favorites = () => {
  const { favorites } = useGlobalContext();

  return (
    <section>
      <Cards itemPath="/video/favorites/" videos={favorites} />
    </section>
  );
};

export default Favorites;
