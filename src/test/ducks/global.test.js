import { cleanup } from '@testing-library/react';

import {
  types,
  loadVideos,
  setVideos,
  changeTheme,
  changeSearch,
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
});
