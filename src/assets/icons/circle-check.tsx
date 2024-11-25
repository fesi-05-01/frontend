import { type ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'svg'> {
  variant?: 'default' | 'secondary';
}

export default function CircleCheck({ variant = 'default', ...props }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle
        cx="12"
        cy="12"
        r="9"
        fill={variant === 'default' ? '#111827' : '#F97316'}
      />
      <path
        d="M8.5 11.8245L11.0087 14.3333L15.342 10"
        stroke={variant === 'default' ? '#F97316' : 'white'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
