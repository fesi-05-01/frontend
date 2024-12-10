import { Suspense } from 'react';
import type { Metadata } from 'next';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Header from '~/src/components/layout/header';
import { pretendard } from '~/src/fonts/fonts';
import JotaiProvider from '~/src/providers/jotai-provider';
import MSWProvider from '~/src/providers/msw-provider';
import NavigationProvider from '~/src/providers/navigation-provider';
import TanstackQueryProvider from '~/src/providers/tanstack-query-provider';
import ToastProvider from '~/src/providers/toast-provider';
import { cn } from '~/src/utils/class-name';

import '~/src/styles/globals.css';

export const metadata: Metadata = {
  title: '같이 달램',
  description:
    '유저가 바쁜 일상 속 휴식을 위한 다양한 모임을 탐색하고 참여하며, 직접 모임을 개설하고 리뷰를 생성할 수 있는 서비스.',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ko">
      <body
        className={cn(
          pretendard.variable,
          'bg-secondary-100 font-pretendard font-medium text-secondary-800',
        )}
      >
        <MSWProvider>
          <TanstackQueryProvider>
            <JotaiProvider>
              <Suspense fallback={null}>
                <NavigationProvider />
              </Suspense>

              <ToastProvider />

              <Header />
              {children}
            </JotaiProvider>
          </TanstackQueryProvider>
        </MSWProvider>

        <SpeedInsights />
      </body>
    </html>
  );
}
