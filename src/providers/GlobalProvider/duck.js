import { theme } from '../../assets/styles/theme';

// actions
export const types = {
  LOAD_VIDEOS: 'LOAD_VIDEOS',
  SET_VIDEOS: 'SET_VIDEOS',
  CHANGE_SEARCH: 'CHANGE_SEARCH',
  CHANGE_THEME: 'CHANGE_THEME',
  LOAD_THEME: 'LOAD_THEME',
  TOGGLE_MODAL: 'TOGGLE_MODAL',
  LOGIN: 'LOGIN',
  SET_USER: 'SET_USER',
  LOGIN_ERROR: 'LOGIN_ERROR',
  LOGOUT: 'LOGOUT',
  ADD_TO_FAVORITES: 'ADD_TO_FAVORITES',
  REMOVE_FROM_FAVORITES: 'REMOVE_FROM_FAVORITES',
  LOAD_USER: 'LOAD_USER',
  LOAD_FAVORITES: 'LOAD_FAVORITES',
};
// initial state
export const initialState = {
  videos: [],
  search: '',
  theme: theme.lightTheme,
  isLoading: false,
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
};
// actions creators
export const loadVideos = () => {
  return { type: types.LOAD_VIDEOS };
};
export const setVideos = (videos) => {
  return {
    type: types.SET_VIDEOS,
    payload: {
      videos,
    },
  };
};
export const changeSearch = (search) => {
  return {
    type: types.CHANGE_SEARCH,
    payload: {
      search,
    },
  };
};
export const changeTheme = (newTheme) => {
  return {
    type: types.CHANGE_THEME,
    payload: {
      theme: newTheme,
    },
  };
};
export const loadTheme = () => {
  return { type: types.LOAD_THEME };
};
export const toggleModal = () => {
  return { type: types.TOGGLE_MODAL };
};
export const addToFavorites = (video) => {
  return { type: types.ADD_TO_FAVORITES, payload: { video } };
};
export const removeFromFavorites = (id) => {
  return { type: types.REMOVE_FROM_FAVORITES, payload: { id } };
};
export const loadFavorites = () => {
  return { type: types.LOAD_FAVORITES };
};

export const logout = () => {
  return { type: types.LOGOUT };
};
export const setUser = (user) => {
  return { type: types.SET_USER, payload: { user } };
};
export const loadUser = () => {
  return { type: types.LOAD_USER };
};
// reducer
export const reducer = (state, action) => {
  switch (action.type) {
    case types.LOAD_VIDEOS:
      return {
        ...state,
        videos: [],
        isLoading: true,
      };
    case types.SET_VIDEOS:
      const { videos } = action.payload;
      return {
        ...state,
        videos,
        isLoading: false,
      };
    case types.CHANGE_SEARCH:
      const { search } = action.payload;
      return {
        ...state,
        search,
      };
    case types.CHANGE_THEME: {
      const { theme: newTheme } = action.payload;
      localStorage.setItem('THEME', JSON.stringify(newTheme));

      return {
        ...state,
        theme: newTheme,
      };
    }
    case types.LOAD_THEME: {
      const themeLoaded = JSON.parse(localStorage.getItem('THEME')) || theme.lightTheme;
      return {
        ...state,
        theme: themeLoaded,
      };
    }
    case types.TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          isOpen: !state.modal.isOpen,
        },
      };

    case types.ADD_TO_FAVORITES: {
      const { video } = action.payload;
      const favorites = state.preferences.favorites.concat(video);
      const favoritesIDs = state.preferences.favoritesIDs.concat(video.id.videoId);
      localStorage.setItem('FAVORITES', JSON.stringify(favorites));
      localStorage.setItem('FAVORITES_ID', JSON.stringify(favoritesIDs));
      return {
        ...state,
        preferences: {
          favorites,
          favoritesIDs,
        },
      };
    }
    case types.REMOVE_FROM_FAVORITES: {
      const { id } = action.payload;
      const favorites = state.preferences.favorites.filter(
        (favorite) => favorite.id.videoId !== id
      );
      const favoritesIDs = state.preferences.favoritesIDs.filter(
        (favoriteID) => favoriteID !== id
      );
      localStorage.setItem('FAVORITES', JSON.stringify(favorites));
      localStorage.setItem('FAVORITES_ID', JSON.stringify(favoritesIDs));

      return {
        ...state,
        preferences: {
          favorites,
          favoritesIDs,
        },
      };
    }
    case types.LOAD_FAVORITES: {
      const favorites = JSON.parse(localStorage.getItem('FAVORITES')) || [];
      const favoritesIDs = JSON.parse(localStorage.getItem('FAVORITES_ID')) || [];
      return {
        ...state,
        preferences: {
          favorites,
          favoritesIDs,
        },
      };
    }

    case types.LOGOUT:
      localStorage.removeItem('USER');
      return {
        ...state,
        login: {
          ...state.login,
          user: null,
          error: false,
          message: '',
        },
      };
    case types.SET_USER: {
      const { user } = action.payload;
      localStorage.setItem('USER', JSON.stringify(user));
      return {
        ...state,
        login: {
          ...state.login,
          user,
        },
      };
    }
    case types.LOAD_USER: {
      const user = JSON.parse(localStorage.getItem('USER'));
      return {
        ...state,
        login: {
          ...state.login,
          user,
        },
      };
    }

    default:
      return state;
  }
};
