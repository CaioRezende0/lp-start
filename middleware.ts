import { NextRequest, NextResponse } from 'next/server';
import { verifySessionToken } from './src/lib/auth';

export function middleware(request: NextRequest) {
  const session = request.cookies.get('admin_session')?.value;
  const isAuthenticated = Boolean(verifySessionToken(session));
  const isAdminRoute = request.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = request.nextUrl.pathname.startsWith('/login');

  if (isAdminRoute && !isAuthenticated) {
    const loginUrl = new URL('/login', request.url);
    loginUrl.searchParams.set('callbackUrl', request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (isLoginRoute && isAuthenticated) {
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/login'],
};
