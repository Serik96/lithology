import { routes } from '@/const';
import { getAllValues } from '@/helpers/object-helper';

export const isPrivatePage = (pathname: string) => {
  const privateRoutes = getAllValues(routes.project);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return privateRoutes.map(e => pathname.includes(e)).some(e => e);
};

export const isPageWithFooter = (pathname: string) => {
  const privateRoutes = [routes.auth.signIn, routes.auth.registration];
  return !privateRoutes.includes(pathname);
};
