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

export const config = {
  // Only run middleware in dev mode (not for static export)
  matcher: process.env.NODE_ENV === 'production' 
    ? [] // Skip in production (static export)
    : [
        // Match all pathnames
        '/(.*)',
      ],
};

