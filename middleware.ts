import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['en', 'de', 'fr', 'es'],
  defaultLocale: 'de',
  localePrefix: 'always'
});

// Match all paths except for ones starting with api, _next or that contain a file extension
export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
