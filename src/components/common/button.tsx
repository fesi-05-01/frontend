'use client';

import React, { type ComponentPropsWithoutRef } from 'react';

// 수정
import { cn } from '~/src/utils/class-name';

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'outlined';
  size?: 'small' | 'large';
}

export default function Button({
  children,
  variant,
  disabled,
  className,
  size,
  ...props
}: ButtonProps) {
  const sizeClass = size === 'small' ? 'h-[40px]' : 'h-[44px]';

  return (
    <button
      {...props}
      disabled={disabled}
      className={cn(
        'w-full rounded-xl px-3 text-white',
        sizeClass,
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
