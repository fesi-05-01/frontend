import { type ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'svg'> {
  isChecked?: boolean;
}

export default function Checkbox({ isChecked = false, ...props }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {isChecked ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="6" fill="white" />
          <path
            d="M7 11.625L10.1098 14.7348C10.2563 14.8813 10.4937 14.8813 10.6402 14.7348L16.375 9"
            stroke="#EA580C"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </>
      ) : (
        <rect
          x="3.5"
          y="3.5"
          width="17"
          height="17"
          rx="5.5"
          fill="white"
          stroke="#E5E7EB"
        />
      )}
    </svg>
  );
}
