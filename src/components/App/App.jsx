import React, { useState } from 'react';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import Layout from '../Layout';
import { useYoutubeVideos } from '../../utils/hooks/useYoutubeVideos';

// views
import Home from '../../pages/Home/HomePage';
import DetailsPage from '../../pages/Details';

const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState({
    home: true,
    video: null,
  });
  const { videos, getNewVideos } = useYoutubeVideos(search);

  // handlers
  const handleSearch = (event) => {
    const { value } = event.target;
    setSearch(value);
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
      <GlobalStyle />
      <Layout handleSearch={handleSearch} handleKeyPress={handleKeyPress} search={search}>
        {page.home ? (
          <Home handleSelectVideo={handleSelectVideo} videos={videos} />
        ) : (
          <DetailsPage
            video={page.video}
            handleSelectVideo={handleSelectVideo}
            relatedVideos={videos.items}
          />
        )}
      </Layout>
    </>
  );
};

export default App;
