import { useEffect } from 'react';

export const useMountEffect = (callback: VoidFunction) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
  }, []);
};
