'use client';

import { type ComponentPropsWithoutRef, useState } from 'react';

import DalaemfitIcon from '~/src/assets/icons/dalaemfit.svg';
import WorkationIcon from '~/src/assets/icons/workation.svg';
import { type GatheringType } from '~/src/services/types';
import { cn } from '~/src/utils/class-name';

type SelectedGatheringType = Extract<GatheringType, 'DALLAEMFIT' | 'WORKATION'>;

export default function GatheringTab() {
  /**
   * NOTE: 추후에 전역 상태관리로 변경하고 외부에서 주입하는 로직으로 변경해야함
   */
  const [selected, setSelected] = useState<SelectedGatheringType>('DALLAEMFIT');
  const handleSelect = (type: SelectedGatheringType) => {
    setSelected(type);
  };

  return (
    <div className="relative h-10 w-fit">
      <section className="flex gap-3 text-secondary-400">
        <TabItem
          className={cn(
            'w-[83px]',
            selected === 'DALLAEMFIT' && 'text-secondary-900',
          )}
          onClick={() => handleSelect('DALLAEMFIT')}
        >
          <span className="text-lg font-semibold">달램핏</span>
          <DalaemfitIcon />
        </TabItem>

        <TabItem
          className={cn(
            'w-[99px]',
            selected === 'WORKATION' && 'text-secondary-900',
          )}
          onClick={() => handleSelect('WORKATION')}
        >
          <span className="text-lg font-semibold">워케이션</span>
          <WorkationIcon />
        </TabItem>
      </section>

      <div
        className={cn(
          'absolute bottom-0 h-0.5 bg-secondary-900 transition-transform duration-300',
          selected === 'DALLAEMFIT' && 'w-[83px] translate-x-0',
          selected === 'WORKATION' && 'w-[99px] translate-x-[calc(100%-4px)]',
        )}
      />
    </div>
  );
}

function TabItem({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<'div'>) {
  return (
    <div
      className={cn(
        'flex cursor-pointer items-center gap-1 transition-colors duration-300',
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
