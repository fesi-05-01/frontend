'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import useCustomParams from '~/src/hooks/use-custom-params';

export default function SwitchAuthPage() {
  const pathname = usePathname();
  const { getParams } = useCustomParams();

  return (
    <Link
      className="text-primary-600 underline"
      href={{
        pathname: PATH_MAP[pathname].path,
        query: getParams(['callback', 'open']),
      }}
    >
      {PATH_MAP[pathname].label}
    </Link>
  );
}

const PATH_MAP: Record<string, { label: string; path: string }> = {
  '/login': {
    label: '회원가입',
    path: '/signup',
  },
  '/signup': {
    label: '로그인',
    path: '/login',
  },
};
