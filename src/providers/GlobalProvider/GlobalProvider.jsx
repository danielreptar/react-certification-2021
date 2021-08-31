import React, { createContext, useContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  changeSearch,
  changeTheme,
  loadTheme,
  initialState,
  reducer,
  setVideos,
  toggleModal,
  loadFavorites,
  addToFavorites,
  logout,
  setUser,
  loadUser,
  removeFromFavorites,
} from './duck';
import { theme } from '../../assets/styles/theme';

const GlobalContext = createContext({
  videos: [],
  search: '',
  theme: theme.lightTheme,
  modal: {
    isOpen: false,
  },
  login: {
    user: null,
    error: true,
    message: '',
  },
  preferences: {
    favorites: [],
    favoritesIDs: [],
  },
  setVideosCall: () => {},
  changeSearchCall: () => {},
  toggleModalCall: () => {},
});

export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("You can't use useGlobalContext outside a GlobalProvider");
  }
  return context;
};

const GlobalProvider = (props) => {
  const { children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);

  const logoutCall = useCallback(() => {
    dispatch(logout());
  }, []);
  const setUserCall = useCallback((user) => {
    dispatch(setUser(user));
  }, []);
  const setVideosCall = useCallback((videos) => {
    dispatch(setVideos(videos));
  }, []);
  const changeSearchCall = useCallback(() => {
    dispatch(changeSearch());
  }, []);
  const loadUserCall = useCallback((videos) => {
    dispatch(loadUser(videos));
  }, []);
  const changeThemeCall = useCallback((newTheme) => {
    dispatch(changeTheme(newTheme));
  }, []);
  const loadThemeCall = useCallback(() => {
    dispatch(loadTheme());
  }, []);
  const toggleModalCall = useCallback(() => {
    dispatch(toggleModal());
  }, []);
  const loadFavoritesCall = useCallback(() => {
    dispatch(loadFavorites());
  }, []);
  const addToFavoritesCall = useCallback((video) => {
    dispatch(addToFavorites(video));
  }, []);
  const removeFromFavoritesCall = useCallback((id) => {
    dispatch(removeFromFavorites(id));
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        videos: state.videos,
        search: state.search,
        theme: state.theme,
        modal: state.modal,
        login: state.login,
        favorites: state.preferences.favorites,
        favoritesIDs: state.preferences.favoritesIDs,
        setUserCall,
        logoutCall,
        loadUserCall,
        setVideosCall,
        changeSearchCall,
        changeThemeCall,
        loadThemeCall,
        toggleModalCall,
        loadFavoritesCall,
        addToFavoritesCall,
        removeFromFavoritesCall,
      }}
      {...props}
    >
      {children}
    </GlobalContext.Provider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalProvider;
