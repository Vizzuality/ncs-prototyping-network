import { NextRequest } from 'next/server';

import createIntlMiddleware from 'next-intl/middleware';

export default async function middleware(request: NextRequest) {
  const defaultLocale = request.headers.get('x-your-custom-locale') || 'en';

  const handleI18nRouting = createIntlMiddleware({
    locales: ['en', 'es', 'pt', 'id', 'fr', 'cmn', 'sw'],
    defaultLocale,
  });
  const response = handleI18nRouting(request);

  response.headers.set('x-your-custom-locale', defaultLocale);

  return response;
}

export const config = {
  matcher: ['/', '/(id|pt|es|en)/:path*'],
};
