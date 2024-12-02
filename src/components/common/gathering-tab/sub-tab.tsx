'use client';

import { useBreakpoint } from 'use-breakpoint';

import Chip from '~/src/components/common/chip';
import { type GatheringType } from '~/src/services/types';
import { getBreakpoints } from '~/src/utils/breakpoints';
import { cn } from '~/src/utils/class-name';

const BREAKPOINT = getBreakpoints();

const VALUE: Array<{ label: string; value: GatheringType }> = [
  {
    label: '전체',
    value: 'DALLAEMFIT',
  },
  {
    label: '오피스 스트레칭',
    value: 'OFFICE_STRETCHING',
  },
  {
    label: '마인드풀니스',
    value: 'MINDFULNESS',
  },
];

interface Props {
  type: GatheringType;
  onChangeFilter: (type: GatheringType) => void;
  className?: string;
}

export default function Sub({ type, onChangeFilter, className }: Props) {
  const { breakpoint } = useBreakpoint(BREAKPOINT, 'mobile');

  return (
    <div
      className={cn(
        'flex min-h-10 gap-2 transition-opacity duration-300',
        type === 'WORKATION' && 'opacity-0',
        className,
      )}
    >
      {VALUE.map(({ label, value }) => (
        <Chip
          key={value}
          size={breakpoint === 'mobile' ? 'small' : 'large'}
          state={value === type ? 'active' : 'default'}
          onClick={() => onChangeFilter(value)}
        >
          {label}
        </Chip>
      ))}
    </div>
  );
}
