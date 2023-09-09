import createMiddleware from 'next-intl/middleware';
import { locales } from '@/const';

export default createMiddleware({
  locales,
  defaultLocale: locales[0],
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
