import React, { useState } from 'react';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import Layout from '../Layout';
import { useYoutubeVideos } from '../../utils/hooks/useYoutubeVideos';

// views
import Home from '../../pages/Home/HomePage';
import DetailsPage from '../../pages/Details';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import { ThemeProvider } from 'styled-components';

const App = () => {
  const [page, setPage] = useState({
    home: true,
    video: null,
  });
  const { search, theme, changeSearchCall } = useGlobalContext();
  const { getNewVideos } = useYoutubeVideos(search);

  // handlers
  const handleSearch = (event) => {
    const { value } = event.target;
    changeSearchCall(value);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      getNewVideos(search);
      setPage({ home: true, video: null });
    }
  };
  const handleSelectVideo = (video) => {
    setPage({
      home: false,
      video,
    });
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Layout
          handleSearch={handleSearch}
          handleKeyPress={handleKeyPress}
          search={search}
        >
          {page.home ? (
            <Home handleSelectVideo={handleSelectVideo} />
          ) : (
            <DetailsPage video={page.video} handleSelectVideo={handleSelectVideo} />
          )}
        </Layout>
      </ThemeProvider>
    </>
  );
};

export default App;
