import React, { createContext, useContext, useReducer, useCallback } from 'react';
import PropTypes from 'prop-types';
import { changeSearch, changeTheme, initialState, reducer, setVideos } from './duck';
import { theme } from '../../assets/styles/theme';

const GlobalContext = createContext({
  videos: [],
  search: '',
  theme: theme.lightTheme,
  setVideosCall: () => {},
  changeSearchCall: () => {},
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

  const setVideosCall = useCallback(
    (videos) => {
      dispatch(setVideos(videos));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  const changeSearchCall = useCallback(
    (videos) => {
      dispatch(changeSearch(videos));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );
  const changeThemeCall = useCallback(
    (newTheme) => {
      dispatch(changeTheme(newTheme));
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [state]
  );

  return (
    <GlobalContext.Provider
      value={{
        videos: state.videos,
        search: state.search,
        theme: state.theme,
        setVideosCall,
        changeSearchCall,
        changeThemeCall,
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
