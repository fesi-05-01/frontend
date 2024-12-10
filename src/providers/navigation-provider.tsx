'use client';

import { useCallback, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

import useReviewFilterAtom from '~/src/hooks/reviews/use-review-filter-atom';

export default function NavigationProvider() {
  const pathname = usePathname();
  const prevPathname = useRef(pathname);

  const { onResetFilter } = useReviewFilterAtom();

  const isMovedOtherPage = useCallback(
    (path: string) => {
      return prevPathname.current === path && pathname !== path;
    },
    [pathname],
  );

  useEffect(() => {
    if (isMovedOtherPage('/all-reviews')) {
      onResetFilter();
    }

    prevPathname.current = pathname;
  }, [isMovedOtherPage, onResetFilter, pathname]);

  return null;
}
