import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  type: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  variant?: 'default' | 'cancel';
}

export default function Button({
  children,
  type,
  disabled = false,
  variant = 'default',
}: ButtonProps) {
  const buttonstyle = 'w-full rounded-xl p-3';

  const defaultstyle = disabled
    ? 'bg-secondary-400 text-white'
    : 'bg-primary-600 text-white';

  const cancelstyle = disabled
    ? 'bg-white border-secondary-300 border text-secondary-400'
    : 'bg-white border-primary-600 border text-primary-600';

  const variantstyle = variant === 'cancel' ? cancelstyle : defaultstyle;

  return (
    <button
      className={`${buttonstyle} ${variantstyle} ${disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
