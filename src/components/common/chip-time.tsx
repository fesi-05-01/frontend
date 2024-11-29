import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface ChipTimeProps extends ComponentPropsWithoutRef<'button'> {
  children: React.ReactNode;
  state: 'active' | 'inactive' | 'disabled';
  className?: string;
}

export default function ChipTime({
  children,
  state,
  className,
}: ChipTimeProps) {
  const stateClasses = {
    active: 'bg-gray-900 text-white',
    inactive: 'bg-gray-50 text-gray-900 border border-gray-200',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
  };

  return (
    <button
      className={cn(
        `rounded-lg px-3 py-1.5 text-sm font-medium ${stateClasses[state]}`,
        className,
      )}
    >
      {children}
    </button>
  );
}
