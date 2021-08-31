import React, { useEffect } from 'react';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import Layout from '../Layout';
import { useYoutubeVideos } from '../../utils/hooks/useYoutubeVideos';

// views
import Home from '../../pages/Home/HomePage';
import Favorites from '../../pages/Favorites';
import DetailsPage from '../../pages/Details';
import { useGlobalContext } from '../../providers/GlobalProvider/GlobalProvider';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute';
import DetailsFavorite from '../../pages/DetailsFavorite/DetailsFavorite';

const App = () => {
  const {
    search,
    theme,
    changeSearchCall,
    loadThemeCall,
    loadFavoritesCall,
    loadUserCall,
    login,
  } = useGlobalContext();
  const { getNewVideos } = useYoutubeVideos(search);

  // handlers
  const handleSearch = (value) => {
    changeSearchCall(value);
  };
  const handleKeyPress = (event) => {
    if (event.keyCode === 13) {
      getNewVideos(search);
    }
  };

  useEffect(() => {
    loadFavoritesCall();
  }, [loadFavoritesCall]);
  useEffect(() => {
    loadUserCall();
  }, [loadUserCall]);
  useEffect(() => {
    loadThemeCall();
  }, [loadThemeCall]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <BrowserRouter>
          <Switch>
            <Layout
              handleSearch={handleSearch}
              handleKeyPress={handleKeyPress}
              search={search}
            >
              <Route exact path="/" component={Home} />
              <ProtectedRoute
                exact
                user={login.user}
                path="/favorites"
                component={Favorites}
              />
              <ProtectedRoute
                user={login.user}
                exact
                path="/video/favorites/:id"
                component={DetailsFavorite}
              />
              <Route exact path="/video/:id" component={DetailsPage} />
            </Layout>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
};

export default App;
