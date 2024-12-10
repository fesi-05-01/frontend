import { type PropsWithChildren } from 'react';

import { cn } from '~/src/utils/class-name';

export default function ReviewContainer({ children }: PropsWithChildren) {
  return (
    <section
      className={cn(
        'flex grow flex-col border-t-2 border-secondary-900 bg-white',
        'px-4 py-6 tablet:p-6',
      )}
    >
      {children}
    </section>
  );
}
