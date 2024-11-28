'use client';

import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';

import CardLarge from '~/src/components/card/card-large';
import CardSmall from '~/src/components/card/card-small';
import MainContainer from '~/src/components/layout/main-container';
import { type Gathering } from '~/src/services/gatherings/types';
import { getBreakpoints } from '~/src/utils/breakpoints';

const tmpVar: Gathering = {
  id: 1,
  image: '/IMG_1190.jpg',
  name: '달램핏 마인드풀니스',
  location: '을지로3가',
  dateTime: '2024-07-31T09:06:16.184Z',
  participantCount: 5,
  capacity: 20,
};

const BREAKPOINTS = getBreakpoints();

export default function GatheringsPage() {
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
    <MainContainer>
      {breakpoint}
      {breakpoint === 'tablet' || breakpoint === 'desktop' ? (
        <CardLarge state={tmpState} gathering={tmpVar} />
      ) : (
        <CardSmall state={tmpState} gathering={tmpVar} />
      )}
      <button className="border border-black bg-gray-200 p-2" onClick={tmpFn}>
        default | disabled
      </button>
    </MainContainer>
  );
}
