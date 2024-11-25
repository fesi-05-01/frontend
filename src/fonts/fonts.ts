import localFont from 'next/font/local';

export const pretendard = localFont({
  src: [
    { path: './Pretendard-Light.woff', weight: '300', style: 'normal' },
    { path: './Pretendard-Light.woff2', weight: '300', style: 'normal' },
    { path: './Pretendard-Regular.woff', weight: '400', style: 'normal' },
    { path: './Pretendard-Regular.woff2', weight: '400', style: 'normal' },
    { path: './Pretendard-Medium.woff', weight: '500', style: 'normal' },
    { path: './Pretendard-Medium.woff2', weight: '500', style: 'normal' },
    { path: './Pretendard-SemiBold.woff', weight: '600', style: 'normal' },
    { path: './Pretendard-SemiBold.woff2', weight: '600', style: 'normal' },
    { path: './Pretendard-Bold.woff', weight: '700', style: 'normal' },
    { path: './Pretendard-Bold.woff2', weight: '700', style: 'normal' },
  ],
  variable: '--font-pretendard',
});
