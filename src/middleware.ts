import { MiddlewareConfig, NextRequest, NextResponse } from 'next/server';
import { middlewareAuth } from './util/middlewareAuth';

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const url = request.url;

  if (pathname.startsWith('/auth')) {
    const user = await middlewareAuth(request);

    if (user) {
      if (user.role !== 'ADMIN') return NextResponse.redirect(new URL('/profile', url));

      return NextResponse.redirect(new URL('/dashboard', url));
    }
  }

  if (pathname.startsWith('/dashboard')) {
    const user = await middlewareAuth(request);

    if (!user) return NextResponse.redirect(new URL('/auth', url));

    if (user.role !== 'ADMIN') return NextResponse.redirect(new URL('/profile', url));
  }

  if (pathname.startsWith('/profile')) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL('/auth', url));

    if (user.role === 'ADMIN') return NextResponse.redirect(new URL('/dashboard', url));
  }

  if (pathname.startsWith('/complete-profile')) {
    const user = await middlewareAuth(request);
    if (!user) return NextResponse.redirect(new URL('/auth', url));
  }

  return NextResponse.next();
}

export const config: MiddlewareConfig = {
  matcher: ['/auth', '/complete-profile/:path*', '/profile/:path*', '/dashboard/:path*'],
};
