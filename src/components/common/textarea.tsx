'use client';

import {
  type ComponentPropsWithoutRef,
  type ForwardedRef,
  forwardRef,
} from 'react';

import { cn } from '~/src/utils/class-name';

export default forwardRef(function Textarea(
  { className, ...props }: ComponentPropsWithoutRef<'textarea'>,
  ref: ForwardedRef<HTMLTextAreaElement>,
) {
  return (
    <div className={cn('rounded-lg bg-secondary-50 p-2')}>
      <textarea
        ref={ref}
        {...props}
        className={cn(
          'h-[120px] w-full resize-none bg-transparent scrollbar-thin scrollbar-track-transparent scrollbar-thumb-secondary-200 focus:outline-none',
          className,
        )}
      />
    </div>
  );
});
