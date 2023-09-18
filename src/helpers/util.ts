import { routes } from '@/const';

export const boolToNum = (value?: boolean | null): number | null =>
  value === null || value === undefined ? null : Number(value);

export const isPrivatePage = (pathname: string) => {
  const privateRoutes = Object.entries(routes.project).map(e => e[1]);
  return privateRoutes.includes(pathname);
};

export const isPageWithoutFooter = (pathname: string) => {
  const privateRoutes = [routes.auth.sign_in, routes.auth.registration];
  return privateRoutes.includes(pathname);
};
