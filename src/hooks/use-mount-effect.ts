import { useEffect } from 'react';

export const useMountEffect = (callback: VoidFunction) => {
  useEffect(() => {
    callback();
  }, []);
};
