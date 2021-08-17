import { theme } from '../../assets/styles/theme';

// actions
export const types = {
  LOAD_VIDEOS: 'LOAD_VIDEOS',
  SET_VIDEOS: 'SET_VIDEOS',
  CHANGE_SEARCH: 'CHANGE_SEARCH',
  CHANGE_THEME: 'CHANGE_THEME',
};
// initial state
export const initialState = {
  videos: [],
  search: '',
  theme: theme.lightTheme,
  isLoading: false,
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
    case types.CHANGE_THEME:
      const { theme: newTheme } = action.payload;

      return {
        ...state,
        theme: newTheme,
      };

    default:
      return state;
  }
};
