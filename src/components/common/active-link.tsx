'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
}

export default function ActiveLink({ href, children }: ActiveLinkProps) {
  const pathname = usePathname();

  const linkClassName = pathname === href ? 'link text-secondary-900' : 'link';

  return (
    <Link href={href} className={linkClassName}>
      {children}
    </Link>
  );
}
