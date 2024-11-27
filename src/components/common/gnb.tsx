'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import ActiveLink from '~/src/components/common/active-link';
import Logo from '~/src/components/common/logo';

export default function Gnb() {
  const pathname = usePathname();

  return (
    <nav className="flex gap-4">
      <Logo />

      {/* <Link
        className={`link ${pathname === '/gatherings' ? 'text-secondary-900' : ''}`}
        href="/gatherings"
      >
        모임 찾기
      </Link> */}
      <ActiveLink href="/gatherings">모임 찾기</ActiveLink>
      <Link
        className={`link ${pathname === '/wishlist' ? 'text-secondary-900' : ''}`}
        href="/wishlist"
      >
        찜한 모임
      </Link>
      <Link
        className={`link ${pathname === '/all-reviews' ? 'text-secondary-900' : ''}`}
        href="/all-reviews"
      >
        모든 리뷰
      </Link>
    </nav>
  );
}
