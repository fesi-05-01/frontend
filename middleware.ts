import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

// 로그인 없이 접근 가능
// const publicRoutes = ['/', '/login', '/signup'];

// 로그인 하면 접근 불가
const protectedRoutes = ['/login', '/signup'];

export default async function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  const accessToken = cookies().get('accessToken');

  // 로그인 된 상태에서 접근 시 홈으로
  if (accessToken && protectedRoutes.includes(path)) {
    return NextResponse.redirect(new URL('/', req.nextUrl));
  }

  // // 로그인 안 된 상태에서 ex) /mypage 접근 시 로그인 페이지로
  // if (!accessToken && !publicRoutes.includes(path)) {
  //   return NextResponse.redirect(new URL('/login', req.nextUrl));
  // }

  return NextResponse.next();
}
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  // 제외 경로
};
