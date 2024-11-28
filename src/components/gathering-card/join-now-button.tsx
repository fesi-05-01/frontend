import { type ComponentPropsWithoutRef } from 'react';

import RightArrow from '~/src/assets/icons/arrow-right.svg';
import { cn } from '~/src/utils/class-name';

interface JoinNowButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export default function JoinNowButton({
  className,
  ...props
}: JoinNowButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'inline-flex gap-2 whitespace-nowrap text-orange-600',
        className,
      )}
    >
      <span className="text-base font-semibold">join now</span>
      <RightArrow className="text-orange-600" />
    </button>
  );
}
