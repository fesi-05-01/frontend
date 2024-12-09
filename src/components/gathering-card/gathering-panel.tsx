'use client';

import GatheringTab from '~/src/components/common/gathering-tab';
import LeftFilter from '~/src/components/common/left-filter';
import RightFilter from '~/src/components/common/right-filter';
import CreateGatheringModal from '~/src/components/gatherings/create-gathering-modal';
import { useGatheringFilter } from '~/src/hooks/gatherings/use-gathering-filter';
import { type GatheringType } from '~/src/services/types';

export default function GatheringPanel() {
  const { type, setType } = useGatheringFilter();

  const handleChangeType = (type: GatheringType) => {
    setType(type);
  };

  return (
    <div className="flex flex-col gap-4">
      <GatheringTab className="gap-1">
        <div className="flex items-start justify-between">
          <GatheringTab.Main type={type} onChangeFilter={handleChangeType} />
          <CreateGatheringModal />
        </div>
        <GatheringTab.Sub type={type} onChangeFilter={handleChangeType} />
      </GatheringTab>
      <div className="z-[5] flex justify-between gap-2">
        <div className="flex gap-2">
          <RightFilter
            options={['지역 전체', '건대입구', '을지로3가', '신림', '홍대입구']}
            placeholder="지역 전체"
          />
          <RightFilter calendar={true} options={[]} placeholder="날짜 전체" />
        </div>
        <LeftFilter options={['마감 임박', '참여 인원 순']} />
      </div>
    </div>
  );
}
