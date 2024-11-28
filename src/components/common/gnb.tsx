'use client';

import ActiveLink from '~/src/components/common/active-link';
import Logo from '~/src/components/common/logo';

export default function Gnb() {
  return (
    <nav className="flex items-center justify-center gap-4 whitespace-nowrap text-sm tablet:text-base">
      <Logo />

      <ActiveLink href="/gatherings">모임 찾기</ActiveLink>
      <ActiveLink href="/wishlist">찜한 모임</ActiveLink>
      <ActiveLink href="/all-reviews">모든 리뷰</ActiveLink>
    </nav>
  );
}
