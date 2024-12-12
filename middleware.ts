import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  if (path === '/') {
    return NextResponse.redirect(new URL('/gatherings', req.nextUrl));
  }

  const accessToken = cookies().get('accessToken');

  // 로그인 하면 접근 불가
  const protectedRoutes = ['/login', '/signup'];

  if (accessToken && protectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  // 로그인 안 하면 접근 불가
  const privateRoutes = ['/mypage'];

  if (!accessToken && privateRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/login', req.nextUrl));
  }

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  // 제외 경로
};
