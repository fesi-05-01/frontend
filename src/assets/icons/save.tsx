import { type ComponentPropsWithoutRef } from 'react';

interface Props extends ComponentPropsWithoutRef<'svg'> {
  isActive?: boolean;
}

export default function Save({ isActive = false, ...props }: Props) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      {isActive ? (
        <>
          <circle cx="24" cy="24" r="24" fill="#FFF7ED" />
          <path
            d="M16.4507 25.9082L23.4033 32.4395C23.6428 32.6644 23.7625 32.7769 23.9037 32.8046C23.9673 32.8171 24.0327 32.8171 24.0963 32.8046C24.2375 32.7769 24.3572 32.6644 24.5967 32.4395L31.5493 25.9082C33.5055 24.0706 33.743 21.0466 32.0978 18.9261L31.7885 18.5273C29.8203 15.9906 25.8696 16.416 24.4867 19.3137C24.2913 19.723 23.7087 19.723 23.5133 19.3137C22.1304 16.416 18.1797 15.9906 16.2115 18.5273L15.9022 18.9261C14.2569 21.0466 14.4945 24.0706 16.4507 25.9082Z"
            fill="#EA580C"
            stroke="#EA580C"
            strokeWidth="2"
          />
        </>
      ) : (
        <>
          <circle
            cx="24"
            cy="24"
            r="23"
            fill="white"
            stroke="#E5E7EB"
            strokeWidth="2"
          />
          <path
            d="M16.4507 25.9082L23.4033 32.4395C23.6428 32.6644 23.7625 32.7769 23.9037 32.8046C23.9673 32.8171 24.0327 32.8171 24.0963 32.8046C24.2375 32.7769 24.3572 32.6644 24.5967 32.4395L31.5493 25.9082C33.5055 24.0706 33.743 21.0466 32.0978 18.9261L31.7885 18.5273C29.8203 15.9906 25.8696 16.416 24.4867 19.3137C24.2913 19.723 23.7087 19.723 23.5133 19.3137C22.1304 16.416 18.1797 15.9906 16.2115 18.5273L15.9022 18.9261C14.2569 21.0466 14.4945 24.0706 16.4507 25.9082Z"
            stroke="#D1D5DB"
            strokeWidth="2"
          />
        </>
      )}
    </svg>
  );
}
