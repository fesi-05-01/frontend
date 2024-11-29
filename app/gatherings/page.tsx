'use client';

import { useState } from 'react';
import useBreakpoint from 'use-breakpoint';

import Button from '~/src/components/common/button';
import GatheringCardLarge from '~/src/components/gathering-card/gathering-card-large';
import GatheringCardSmall from '~/src/components/gathering-card/gathering-card-small';
import JoinUsBanner from '~/src/components/gathering-card/join-us-banner';
import MainContainer from '~/src/components/layout/main-container';
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
      <JoinUsBanner />
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <div className="flex justify-between">
            <div className="">여기 달램핏과 워케이션</div>
            <Button className="w-[115px]">모임 만들기</Button>
          </div>
          <div className="flex flex-col gap-4">
            <div className="c">전체 오피스스트레칭</div>
            <div className="flex justify-between gap-2">
              지역전체 닐짜전체 마감임박 하려면 필터랑 드롭다운 클래스네임
              수정되어야
            </div>
          </div>
        </div>

        {/* 카드 */}

        {breakpoint === 'tablet' || breakpoint === 'desktop' ? (
          <div className="flex flex-col gap-6">
            <GatheringCardLarge state={tmpState} gathering={tmpVar} />
          </div>
        ) : (
          <div className="flex flex-col items-center gap-6">
            <GatheringCardSmall state={tmpState} gathering={tmpVar} />
          </div>
        )}
      </div>

      {breakpoint}
      <button className="border border-black bg-gray-200 p-2" onClick={tmpFn}>
        default | disabled
      </button>
    </MainContainer>
  );
}
