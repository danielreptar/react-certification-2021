import { useState, useLayoutEffect } from 'react';

export function useVideoSizing() {
  const [size, setSize] = useState('540px');

  const updateSize = () => {
    if (window.innerWidth > 768) {
      setSize('540px');
    }
    if (window.innerWidth <= 768) {
      setSize('400px');
    }
    if (window.innerWidth <= 580) {
      setSize('300px');
    }
    if (window.innerWidth <= 375) {
      setSize('260px');
    }
  };

  useLayoutEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
}
