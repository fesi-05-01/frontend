import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface JoinNowButtonProps extends ComponentPropsWithoutRef<'button'> {
  className?: string;
}

export default function ClosedButton({
  className,
  ...props
}: JoinNowButtonProps) {
  return (
    <button {...props} className={cn('text-orange-400', className)}>
      <span className="text-base font-semibold">Closed</span>
    </button>
  );
}
