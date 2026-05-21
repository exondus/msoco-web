import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === '/') {
    const preferredMode = request.cookies.get('msoco_preferred_mode')?.value;
    
    if (preferredMode === 'wedding') {
      return NextResponse.redirect(new URL('/weddings', request.url))
    }
    
    if (preferredMode === 'corporate') {
      return NextResponse.redirect(new URL('/corporate', request.url))
    }
  }
}

export const config = {
  matcher: '/',
}
