'use client';

import { useState } from 'react';
import { useBreakpoint } from 'use-breakpoint';

import Chip from '~/src/components/common/chip';
import { type GatheringType } from '~/src/services/types';
import { getBreakpoints } from '~/src/utils/breakpoints';

const BREAKPOINT = getBreakpoints();

const VALUE = [
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

export default function Sub() {
  const { breakpoint } = useBreakpoint(BREAKPOINT, 'mobile');

  const [selected, setSelected] = useState<GatheringType>('DALLAEMFIT');
  const handleSelect = (type: GatheringType) => {
    setSelected(type);
  };

  return (
    <div className="flex min-h-10 gap-2">
      {selected !== 'WORKATION' && (
        <>
          {VALUE.map(({ label, value }) => (
            <Chip
              key={value}
              size={breakpoint === 'mobile' ? 'small' : 'large'}
              state={value === selected ? 'active' : 'default'}
              onClick={() => handleSelect(value as GatheringType)}
            >
              {label}
            </Chip>
          ))}
        </>
      )}
    </div>
  );
}
