'use client';

import { useState } from 'react';

import Visibility from '~/src/assets/icons/visibility';

interface InputProps {
  type: string;
  placeholder: string;
  error?: string;
  name?: string;
  value?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  type,
  placeholder,
  error,
  name,
  value,
  onChange,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <>
      <div className="relative">
        <input
          className={`w-full rounded-xl bg-gray-50 px-[16px] py-[10px] focus:outline-orange-600 ${
            error ? 'border-2 border-red-600' : 'border-none'
          }`}
          type={showPassword && type === 'password' ? 'text' : type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
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
      {error && <span className="text-sm text-red-600">{error}</span>}
    </>
  );
}
