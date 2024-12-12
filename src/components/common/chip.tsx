import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface ChipProps extends ComponentPropsWithoutRef<'button'> {
  size?: 'small' | 'large';
  state: 'active' | 'default';
}

export default function Chip({
  size,
  state,
  children,
  className,
  ...props
}: ChipProps) {
  const sizeClasses = {
    small: 'px-3 py-2',
    large: 'px-4 py-2.5',
  };

  const stateClasses = {
    active: 'bg-gray-900 text-white',
    default: 'bg-gray-200',
  };

  return (
    <button
      className={cn(
        'rounded-xl text-sm',
        stateClasses[state],
        size && sizeClasses[size],
        !size && 'px-3 py-2 tablet:px-4 tablet:py-2.5',
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
