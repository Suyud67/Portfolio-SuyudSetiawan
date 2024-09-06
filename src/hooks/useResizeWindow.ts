import { useContext, useEffect, useRef } from 'react';

import { AppContext } from '../contexts/AppContext';
import { tailwindScreens } from '../configs/tailwind-theme';

let resizeTimeout: ReturnType<typeof setTimeout>;

type Screen = '2xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';

interface ReturnProps {
  windowWidth: number;
  isMediaScreen: (screen: Screen) => boolean;
}

const useResizeWindow = (listenResize: boolean = true): ReturnProps => {
  const { windowWidth, setWindowWidth } = useContext(AppContext);

  const isCanceled = useRef(false);

  const getWindowWidth = (): number => {
    if (typeof window === 'undefined') return 0;

    const width = window.innerWidth;
    return width;
  };

  const handleOnResize = (): void => {
    if (resizeTimeout) {
      clearTimeout(resizeTimeout);
    }

    resizeTimeout = setTimeout(() => {
      if (!isCanceled.current) {
        setWindowWidth(getWindowWidth());
      }
    }, 300);
  };

  const isMediaScreen = (screen: Screen): boolean => {
    const tailwindMediaWidth = Number.parseInt(
      (tailwindScreens as any)?.[screen],
      10
    );

    return windowWidth >= tailwindMediaWidth;
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    isCanceled.current = false;
    setWindowWidth(getWindowWidth());

    if (listenResize) {
      window.addEventListener('resize', handleOnResize);
    }
    return () => {
      isCanceled.current = true;
      window.removeEventListener('resize', handleOnResize);
      clearTimeout(resizeTimeout);
    };
  }, []);

  return {
    windowWidth,
    isMediaScreen,
  };
};

export default useResizeWindow;
