import * as React from 'react';

import { cn } from '~/src/utils/class-name';

const AuthCard = React.forwardRef<
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
AuthCard.displayName = 'AuthCard';

const AuthCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('p-2 text-2xl font-semibold text-secondary-800', className)}
    {...props}
  />
));
AuthCardTitle.displayName = 'AuthCardTitle';

const AuthCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('w-full', className)} {...props} />
));
AuthCardContent.displayName = 'AuthCardContent';

const AuthCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center whitespace-nowrap p-2', className)}
    {...props}
  />
));
AuthCardFooter.displayName = 'AuthCardFooter';

export { AuthCard, AuthCardContent, AuthCardFooter, AuthCardTitle };
