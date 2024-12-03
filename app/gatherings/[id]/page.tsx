'use client';

import GatheringDetailImage from '~/src/components/gathering-card/gathering-detail-image';
import GatheringInfo from '~/src/components/gathering-card/gathering-info';
import MainContainer from '~/src/components/layout/main-container';
import { type Gathering } from '~/src/services/gatherings/types';

interface Props {
  params: {
    id: string;
  };
}

const tmpVar: Gathering = {
  id: 1,
  image: '/IMG_1190.jpg',
  name: '달램핏 마인드풀니스',
  location: '을지로3가',
  dateTime: '2024-07-31T09:06:16.184Z',
  participantCount: 5, // 20으로 채우면 cardState 변경
  capacity: 20,
};

export default function GatheringItemPage({ params }: Props) {
  return (
    <MainContainer>
      <div className="mt-10 grid grid-cols-2 items-stretch gap-x-[24px] gap-y-[14px]">
        <GatheringDetailImage image={tmpVar.image ?? ''} />
        <GatheringInfo gathering={tmpVar} />
        <div className="col-span-2 mt-[21px]">
          Reviews Gathering {params.id} Page
        </div>
      </div>
    </MainContainer>
  );
}
