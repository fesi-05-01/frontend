'use client';

import ActiveLink from '~/src/components/common/active-link';
import Logo from '~/src/components/common/logo';
import { useWishList } from '~/src/hooks/wishlist/use-wishlist';

export default function Gnb() {
  const { wishlist } = useWishList();
  return (
    <nav className="flex items-center justify-center gap-4 whitespace-nowrap text-sm tablet:text-base">
      <Logo />

      <ActiveLink href="/gatherings">모임 찾기</ActiveLink>
      <ActiveLink
        className="flex items-center gap-[5px]"
        href="/wishlist"
        badgeCount={wishlist.length > 0 ? wishlist.length : undefined}
      >
        찜한 모임
      </ActiveLink>
      <ActiveLink href="/all-reviews">모든 리뷰</ActiveLink>
    </nav>
  );
}
