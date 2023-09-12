import { useEffect } from 'react';

export const useMountEffect = (callback: VoidFunction) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};
