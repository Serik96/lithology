import { routes } from '@/const';
import { getAllValues } from '@/helpers/object-helper';

export const isPrivatePage = (pathname: string): boolean => {
  const privateRoutes = getAllValues(routes.project);

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  return privateRoutes.map(e => pathname.includes(e)).some(e => e);
};

export const isPageWithFooter = (pathname: string): boolean => {
  const privateRoutes = [routes.auth.signIn, routes.auth.registration];
  return !privateRoutes.includes(pathname);
};

export const getLastSlug = (pathname: string): string => {
  const pathArr = pathname.split('/');
  return pathArr[pathArr.length - 1];
};
