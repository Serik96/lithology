import { useRouter } from 'next/router';
import { useEffect } from 'react';

type TRouteChangeCallback = (url: string) => void;

export const useRouteChange = (onUrlChanged: TRouteChangeCallback) => {
  const router = useRouter();

  useEffect(() => {
    // router.events.on('routeChangeStart', onUrlChangeStart);
    router.events.on('routeChangeComplete', onUrlChanged);

    window.onpopstate = () => {
      // onUrlChanged(location.href);

      const url = location.href;
      setTimeout(async () => await router.replace(url), 100);
    };

    /*
    router.beforePopState(params => {
      console.log('beforePopState', params); //{ as }

      if (params.as !== router.asPath) {
        console.log('params.as !== router.asPath', router.asPath);
        // Will run when leaving the current page; on back/forward actions
        // Add your logic here, like toggling the modal state
      }
      return true;
    });
    */

    return () => {
      // console.log('turning off listener');
      // router.events.off('routeChangeStart', onUrlChangeStart);
      router.events.off('routeChangeComplete', onUrlChanged);
      router.beforePopState(() => true);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // router
};
