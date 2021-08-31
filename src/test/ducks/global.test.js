import { cleanup } from '@testing-library/react';

import {
  types,
  loadVideos,
  setVideos,
  changeTheme,
  changeSearch,
  loadTheme,
  toggleModal,
  addToFavorites,
  removeFromFavorites,
  loadFavorites,
  logout,
  setUser,
  loadUser,
} from '../../providers/GlobalProvider/duck';

afterEach(cleanup);

describe('Global duck', () => {
  it('loadVideos', () => {
    const action = types.LOAD_VIDEOS;

    const result = loadVideos();

    expect(result.type).toEqual(action);
  });
  it('setVideos', () => {
    const action = types.SET_VIDEOS;
    const payload = [];

    const result = setVideos(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.videos).toBe(payload);
  });
  it('ChangeSearch', () => {
    const action = types.CHANGE_SEARCH;
    const payload = 'test';

    const result = changeSearch(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.search).toBe(payload);
  });
  it('ChangeTheme', () => {
    const action = types.CHANGE_THEME;
    const payload = 'light Theme';

    const result = changeTheme(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.theme).toBe(payload);
  });
  it('loadTheme', () => {
    const action = types.LOAD_THEME;

    const result = loadTheme();

    expect(result.type).toEqual(action);
  });
  it('toggleModal', () => {
    const action = types.TOGGLE_MODAL;

    const result = toggleModal();

    expect(result.type).toEqual(action);
  });
  it('loadFavorites', () => {
    const action = types.LOAD_FAVORITES;
    const result = loadFavorites();
    expect(result.type).toEqual(action);
  });
  it('logout', () => {
    const action = types.LOGOUT;
    const result = logout();
    expect(result.type).toEqual(action);
  });
  it('loadUser', () => {
    const action = types.LOAD_USER;
    const result = loadUser();
    expect(result.type).toEqual(action);
  });
  it('addToFavorites', () => {
    const action = types.ADD_TO_FAVORITES;
    const payload = 'video test';

    const result = addToFavorites(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.video).toBe(payload);
  });
  it('removeFromFavorites', () => {
    const action = types.REMOVE_FROM_FAVORITES;
    const payload = 'videoTestID';

    const result = removeFromFavorites(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.id).toBe(payload);
  });
  it('setUser', () => {
    const action = types.SET_USER;
    const payload = 'userTest';

    const result = setUser(payload);

    expect(result.type).toEqual(action);
    expect(result.payload.user).toBe(payload);
  });
});
