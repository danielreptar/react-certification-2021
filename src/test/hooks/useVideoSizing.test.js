import { renderHook } from '@testing-library/react-hooks';
import { useVideoSizing } from '../../utils/hooks/useVideoSizing';

describe('Rezise page', () => {
  it('Rezise to large screen', () => {
    const largeSize = '540px';
    global.innerWidth = 1920;
    const { result } = renderHook(() => useVideoSizing());
    expect(result.current).toBe(largeSize);
  });
  it('Rezise to table screen', () => {
    const tabletSize = '400px';
    global.innerWidth = 768;
    const { result } = renderHook(() => useVideoSizing());
    expect(result.current).toBe(tabletSize);
  });
  it('Rezise to large mobile screen', () => {
    const largeMobileSize = '300px';
    global.innerWidth = 580;
    const { result } = renderHook(() => useVideoSizing());
    expect(result.current).toBe(largeMobileSize);
  });
  it('Rezise to small mobile screen', () => {
    const smallMobileSize = '260px';
    global.innerWidth = 375;
    const { result } = renderHook(() => useVideoSizing());
    expect(result.current).toBe(smallMobileSize);
  });
});
