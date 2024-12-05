import * as React from 'react';

import { cn } from '~/src/utils/class-name';

const AuthCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex w-full flex-col items-center justify-center gap-[10px] rounded-2xl bg-white px-[16px] py-[32px] tablet:px-[54px] desktop:w-1/2',
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
    className={cn(
      'text-xl font-semibold text-secondary-800 tablet:text-2xl',
      className,
    )}
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
