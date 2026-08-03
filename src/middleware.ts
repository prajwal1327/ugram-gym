import { auth } from '@/app/api/auth/[...nextauth]/route';
import { NextResponse } from 'next/server';

export default auth((req) => {
  const isAdminRoute = req.nextUrl.pathname.startsWith('/admin');
  const isLoginRoute = req.nextUrl.pathname === '/admin/login';

  if (isAdminRoute && !isLoginRoute && !req.auth) {
    return NextResponse.redirect(new URL('/admin/login', req.url));
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/admin/:path*'],
};
