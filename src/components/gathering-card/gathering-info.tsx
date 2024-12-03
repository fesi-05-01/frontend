'use client';

import Save from '~/src/assets/icons/save';
import ProgressBar from '~/src/components/common/progress-bar';
import ChipInfoContainer from '~/src/components/gathering-card/chip-info-container';
import Confirmation from '~/src/components/gathering-card/confirmation';
import useGatheringCard from '~/src/components/gathering-card/use-gathering-card';
import { type Gathering } from '~/src/services/gatherings/types';

interface GatheringInfoProps {
  gathering: Gathering;
}

export default function GatheringInfo({ gathering }: GatheringInfoProps) {
  const { isActive, handleSaveButton } = useGatheringCard({
    initialState: false,
    participantCount: gathering.participantCount ?? 5,
    capacity: gathering.capacity ?? 20,
  });

  return (
    <div className="rounded-3xl border-2 border-gray-200 bg-white">
      <div className="my-6 flex flex-col">
        {/* 위 */}
        <div className="flex justify-between px-6">
          <div className="flex flex-col">
            <span className="text-lg font-semibold">
              {gathering.name ?? '모임제목정도는좀써주지'}
            </span>
            <span className="mb-3 mt-0.5 text-sm font-medium text-gray-700">
              {gathering.location}
            </span>
            <ChipInfoContainer dateTime={gathering.dateTime ?? ''} />
          </div>
          <div className="">
            <Save isActive={isActive} onClick={handleSaveButton} />
          </div>
        </div>
        <div className="mx-auto mb-6 mt-[43px] w-full border-t-2 border-dashed border-gray-200"></div>
        {/* 아래 */}
        <div className="flex flex-col px-6">
          <div className="flex justify-between">
            <div className="flex gap-3">
              <div className="flex gap-1.5 text-sm font-semibold text-gray-900">
                <span>모집 정원</span>
                <span>{gathering.participantCount}명</span>
              </div>
              <div className="wow">프로필이미지들</div>
            </div>
            {gathering.participantCount >= 5 && <Confirmation />}
          </div>
          <ProgressBar
            current={gathering.participantCount || 5}
            capacity={gathering.capacity || 20}
            className="mb-2 mt-3"
            barClassName={`${gathering.participantCount >= gathering.capacity && 'bg-orange-400'}`}
          />
          <div className="flex justify-between text-xs font-medium text-gray-700">
            <div className="flex gap-1.5">
              <span>최소인원</span>
              <span>5명</span>
            </div>
            <div
              className={`flex gap-1.5 ${gathering.participantCount >= gathering.capacity && 'text-orange-400'}`}
            >
              <span>최대인원</span>
              <span>{gathering.capacity}명</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
