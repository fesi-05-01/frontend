'use client';

import { forwardRef, useState } from 'react';

import Visibility from '~/src/assets/icons/visibility';
import { cn } from '~/src/utils/class-name';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, type, className, ...props }: InputProps, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
      setShowPassword((prevState) => !prevState);
    };

    return (
      <>
        <div className="relative">
          <input
            {...props}
            ref={ref}
            className={cn(
              'w-full rounded-xl bg-gray-50 px-[16px] py-[10px] focus:outline-orange-600',
              error && 'border-2 border-red-600',
              className,
            )}
            type={showPassword && type === 'password' ? 'text' : type}
          />
          {type === 'password' && (
            <button
              type="button"
              onClick={togglePassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 transform"
            >
              <Visibility isVisible={showPassword} />
            </button>
          )}
        </div>
        {error && <span className={cn('text-sm text-red-600')}>{error}</span>}
      </>
    );
  },
);

Input.displayName = 'Input';

export default Input;
