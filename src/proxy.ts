import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const cookie = request.cookies.get('msoco_preferred_mode');
  const { pathname } = request.nextUrl;

  // 1. Skip internal Next.js paths, API routes, and static assets
  if (
    pathname.startsWith('/_next') || 
    pathname.startsWith('/api') || 
    pathname.startsWith('/static') ||
    pathname.includes('.') ||
    pathname === '/gateway'
  ) {
    return NextResponse.next();
  }

  // 2. If no preference cookie is set, send to the Gateway
  if (!cookie && pathname !== '/gateway') {
    return NextResponse.redirect(new URL('/gateway', request.url));
  }

  // 3. If they land on root "/" but have a preference, auto-route them
  if (cookie && pathname === '/') {
    const target = cookie.value === 'corporate' ? '/corporate' : '/weddings';
    return NextResponse.redirect(new URL(target, request.url));
  }

  return NextResponse.next();
}
