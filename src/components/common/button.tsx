'use client';

import React, { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'outlined';
}

export default function Button({
  children,
  variant,
  disabled,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        'w-full rounded-xl p-3 text-white',
        variant === 'outlined'
          ? disabled
            ? 'border border-secondary-400 bg-white text-secondary-400'
            : 'border border-primary-600 bg-white text-primary-600'
          : disabled
            ? 'bg-secondary-400'
            : 'bg-primary-600',
        disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        className,
      )}
    >
      {children}
    </button>
  );
}
