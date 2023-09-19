import { routes } from '@/const';

export const isPrivatePage = (pathname: string) => {
  const privateRoutes = Object.entries(routes.project).map(e => e[1]);
  return privateRoutes.includes(pathname);
};

export const isPageWithFooter = (pathname: string) => {
  const privateRoutes = [routes.auth.signIn, routes.auth.registration];
  return !privateRoutes.includes(pathname);
};
