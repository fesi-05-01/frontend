import type { Metadata } from 'next';

import Header from '~/src/components/layout/header';
import { pretendard } from '~/src/fonts/fonts';
import JotaiProvider from '~/src/providers/jotai-provider';
import { TanstackQueryProvider } from '~/src/providers/tanstack-query-provider';
import { cn } from '~/src/utils/class-name';

import '~/src/styles/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="ko">
      <body
        className={cn(pretendard.variable, 'bg-secondary-100 font-pretendard')}
      >
        <JotaiProvider>
          <TanstackQueryProvider>
            <Header />
            {children}
          </TanstackQueryProvider>
        </JotaiProvider>
      </body>
    </html>
  );
}
