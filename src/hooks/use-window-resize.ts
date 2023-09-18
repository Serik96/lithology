import { useLayoutEffect, useState } from 'react';

type TWindowSize = {
  x: number;
  y: number;
  isMobile: boolean;
};

const mobileBreakpoint = 768;
const initialState = { x: 0, y: 0, isMobile: true };

export const useWindowSize = (): TWindowSize => {
  const [size, setSize] = useState<TWindowSize>(initialState);

  useLayoutEffect(() => {
    function updateSize() {
      setSize({
        x: window.innerWidth,
        y: window.innerHeight,
        isMobile: window.innerWidth < mobileBreakpoint,
      });
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return size;
};
