import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface ChipTimeProps extends ComponentPropsWithoutRef<'button'> {
  state: 'active' | 'inactive';
}

export default function ChipTime({
  children,
  state,
  className,
  disabled,
  ...props
}: ChipTimeProps) {
  const stateClasses = {
    active: 'bg-gray-900 text-white',
    inactive: 'bg-gray-50 text-gray-900 border border-gray-200',
  };

  return (
    <button
      className={cn(
        `flex h-8 w-[60px] items-center justify-center rounded-lg text-sm ${stateClasses[state]}`,
        'disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400',
        className,
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}
