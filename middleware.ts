import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';
import { NextRequest, NextResponse } from 'next/server';

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Skip middleware for static files and Next.js internals
  const pathname = request.nextUrl.pathname;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.startsWith('/_vercel') ||
    pathname.includes('.') // Static files have dots
  ) {
    return NextResponse.next();
  }

  // Apply next-intl middleware for all other routes
  return intlMiddleware(request);
}

// Only run middleware in dev mode (not for static export)
// Next.js doesn't support conditional expressions in config, so we use a simple matcher
// In production, the middleware won't be used anyway due to static export
export const config = {
  matcher: [
    // Match all pathnames except static files
    '/((?!api|_next/static|_next/image|_vercel|.*\\.).*)',
  ],
};

