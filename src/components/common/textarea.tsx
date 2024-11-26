'use client';

import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

export default function Textarea({
  className,
  ...props
}: ComponentPropsWithoutRef<'textarea'>) {
  return (
    <div className={cn('rounded-lg bg-secondary-50 p-2')}>
      <textarea
        {...props}
        className={cn(
          'h-[120px] w-full resize-none bg-transparent scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-200 focus:outline-none',
          className,
        )}
      />
    </div>
  );
}
