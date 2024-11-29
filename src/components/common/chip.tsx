import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface ChipProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  size: 'small' | 'large';
  state: 'active' | 'default';
  className?: string;
}

export default function Chip({
  children,
  size,
  state,
  className,
  ...props
}: ChipProps) {
  const sizeClasses = {
    small: 'px-3 py-2',
    large: 'px-4 py-2.5',
  };

  const stateClasses = {
    active: 'bg-gray-900 text-white',
    default: 'bg-gray-200 text-black',
  };

  return (
    <button
      className={cn(
        `rounded-xl text-sm font-medium ${sizeClasses[size]} ${stateClasses[state]}`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
