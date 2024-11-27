import Link from 'next/link';

import Gnb from '~/src/components/common/gnb';
import { cn } from '~/src/utils/class-name';
export default function Header() {
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
          {/* <Link href="/mypage">마이페이지</Link> */}
          <Link href="/login">로그인</Link>
        </div>
      </section>
    </header>
  );
}
