'use client';
import Link from 'next/link';

import Gnb from '~/src/components/common/gnb';
import ProfileDropdown from '~/src/components/common/profile-dropdown';
import { useAuthStore } from '~/src/store/auth-store';
import { cn } from '~/src/utils/class-name';

export default function Header() {
  const accessToken = useAuthStore((state) => state.accessToken);

  return (
    <header className="fixed inset-x-0 top-0 z-10 h-header border-b-2 border-secondary-900 bg-primary-600 text-primary-50">
      <section
        className={cn(
          'mx-auto flex h-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-0',
        )}
      >
        <Gnb />
        <div>
          {accessToken ? (
            <ProfileDropdown />
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold tablet:text-base"
            >
              로그인
            </Link>
          )}
        </div>
      </section>
    </header>
  );
}
