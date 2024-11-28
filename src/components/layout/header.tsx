'use client';

// import { useState } from 'react';

import Gnb from '~/src/components/common/gnb';
import { cn } from '~/src/utils/class-name';

export default function Header() {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-10 h-header border-b-2 border-secondary-900 bg-primary-600 text-primary-50">
      <section
        className={cn(
          'mx-auto flex h-full max-w-screen-desktop items-center justify-between',
          'px-4 tablet:px-6 desktop:px-0',
        )}
      >
        <Gnb />
        {/* <div>
          {isLoggedIn ? (
            <div>
              <Image
                className="hidden tablet:block"
                src={profilelarge}
                alt="profile-large"
                width={40}
                height={40}
              />
              <Image
                className="block tablet:hidden"
                src={profilesmall}
                alt="profile-small"
                width={40}
                height={40}
              />
            </div>
          ) : (
            <Link
              href="/login"
              className="text-sm font-semibold tablet:text-base"
            >
              로그인
            </Link>
          )}
        </div> */}
      </section>
    </header>
  );
}
