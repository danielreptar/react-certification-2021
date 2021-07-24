import React from 'react';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import Layout from '../Layout';

// views
import Home from '../../pages/Home/HomePage';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Home />
      </Layout>
    </>
  );
};

export default App;
