'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import Badge from '~/src/components/common/badge';
import { cn } from '~/src/utils/class-name';

interface ActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  badgeCount?: number;
}

export default function ActiveLink({
  href,
  children,
  className,
  badgeCount,
}: ActiveLinkProps) {
  const pathname = usePathname();

  const linkClassName = cn(
    'link',
    { 'text-secondary-900 font-semibold ': pathname === href },
    className,
  );
  return (
    <Link href={href} className={linkClassName}>
      {children}
      {pathname === href && badgeCount && (
        <Badge className="flex h-[16px] w-[27px] items-center justify-center text-xs">
          {badgeCount}
        </Badge>
      )}
    </Link>
  );
}
