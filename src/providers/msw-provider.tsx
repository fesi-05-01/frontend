'use client';

import { type PropsWithChildren, useEffect, useRef, useState } from 'react';

const handleMocking = async () => {
  const { worker } = await import('../mocks/browser');
  await worker.start({ onUnhandledRequest: 'bypass' });
};

export default function MSWProvider({ children }: PropsWithChildren) {
  const [isReady, setIsReady] = useState(false);
  const isWorkerStarted = useRef(false);

  useEffect(() => {
    if (process.env.NEXT_RUNTIME === 'nodejs' || isWorkerStarted.current)
      return;

    isWorkerStarted.current = true;
    handleMocking().then(() => setIsReady(true));
  }, []);

  if (!isReady) return null;

  return <>{children}</>;
}
