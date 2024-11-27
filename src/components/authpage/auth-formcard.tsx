import * as React from 'react';

import { cn } from '~/src/utils/class-name';

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex w-full flex-col items-center justify-center gap-[10px] rounded-2xl bg-white px-[54px] py-[32px]',
      className,
    )}
    {...props}
  />
));
Card.displayName = 'Card';

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-2 text-2xl font-semibold text-secondary-800', className)}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('w-full', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center whitespace-nowrap p-2', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardContent, CardFooter, CardTitle };
