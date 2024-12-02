import { type ComponentPropsWithoutRef } from 'react';

import Main from '~/src/components/common/gathering-tab/main-tab';
import Sub from '~/src/components/common/gathering-tab/sub-tab';
import { cn } from '~/src/utils/class-name';

function GatheringTab({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'section'>) {
  return (
    <section
      className={cn(
        'flex flex-col gap-4 border-b-2 border-secondary-200 pb-4',
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

GatheringTab.Main = Main;
GatheringTab.Sub = Sub;

export default GatheringTab;
