'use client';

import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';

import GatheringCardLarge from '~/src/components/gathering-card/gathering-card-large';
import GatheringCardSmall from '~/src/components/gathering-card/gathering-card-small';
import { type Gathering } from '~/src/services/gatherings/types';
import { getBreakpoints } from '~/src/utils/breakpoints';

const tmpVar: Gathering = {
  id: 1,
  image: '/IMG_1190.jpg',
  name: '달램핏 마인드풀니스',
  location: '을지로3가',
  dateTime: '2024-07-31T09:06:16.184Z',
  participantCount: 5, // 20으로 채우면 cardState 변경
  capacity: 20,
};
const BREAKPOINTS = getBreakpoints();

export default function CardContainer() {
  const [tmpState, setTmpState] = useState<'default' | 'disabled'>('default');
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');

  const tmpFn = () => {
    if (tmpState === 'disabled') {
      setTmpState('default');
    } else {
      setTmpState('disabled');
    }
  };

  return (
    <div className="w-full">
      {breakpoint === 'tablet' || breakpoint === 'desktop' ? (
        <div className="flex flex-col gap-6">
          <GatheringCardLarge state={tmpState} gathering={tmpVar} />
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          <GatheringCardSmall state={tmpState} gathering={tmpVar} />
        </div>
      )}
      <button className="border border-black bg-gray-200 p-2" onClick={tmpFn}>
        default | disabled
      </button>
    </div>
  );
}
