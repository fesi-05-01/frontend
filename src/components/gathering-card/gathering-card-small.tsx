'use client';

import Image from 'next/image';

import RectangleBye from '~/src/assets/icons/rectangle-bye.svg';
import Save from '~/src/assets/icons/save';
import MemberCountChip from '~/src/components/common/member-count-chip';
import ProgressBar from '~/src/components/common/progress-bar';
import Tag from '~/src/components/common/tag';
import ChipInfoContainer from '~/src/components/gathering-card/chip-info-container';
import ClosedButton from '~/src/components/gathering-card/closed-button';
import Confirmation from '~/src/components/gathering-card/confirmation';
import JoinNowButton from '~/src/components/gathering-card/join-now-button';
import { type GatheringCardProps } from '~/src/components/gathering-card/type-props';
import useGatheringCard from '~/src/components/gathering-card/use-gathering-card';

export default function GatheringCardSmall({
  state,
  gathering,
}: GatheringCardProps) {
  const { isActive, handleSaveButton, cardState } = useGatheringCard({
    initialState: false,
    participantCount: gathering.participantCount ?? 5,
    capacity: gathering.capacity ?? 20,
  });

  return (
    <div
      className={`relative flex max-w-[343px] flex-col rounded-3xl border-2 border-gray-100 transition-shadow hover:border-gray-200 hover:shadow-card-hover`}
    >
      {/* 이미지 */}
      <div className="relative h-[156px] w-full flex-shrink-0">
        {gathering.image && (
          <Image
            src={gathering.image}
            alt="cat"
            layout="fill"
            objectFit="fill"
            className="rounded-t-3xl"
          />
        )}
        <Tag size="small" className="absolute right-0 top-0">
          오늘 21시 마감
        </Tag>
      </div>

      {/* 이미지 빼고 */}
      <div className="flex flex-col">
        {/* 이것저것 */}
        <div className="mb-5 ml-4 mt-4 flex flex-col gap-2">
          {/* 타이틀 */}
          <div className="relative flex items-center gap-2">
            <Save
              className="absolute right-4 top-0"
              isActive={isActive}
              onClick={handleSaveButton}
            />
            <span className="text-lg font-semibold">{gathering.name}</span>
            <span className="text-lg font-semibold">|</span>
            <span className="text-sm font-medium text-gray-700">
              {gathering.location}
            </span>
          </div>
          <ChipInfoContainer dateTime={gathering.dateTime ?? ''} />
        </div>

        {/* progress bar */}
        <div className="flex items-end justify-between gap-6 px-4 pb-4 pt-2">
          {/* bar랑 그 위에 상태창 */}
          <div className="flex w-full flex-col gap-2">
            {/* 인원수랑 개설확정 */}
            <div className="flex gap-2">
              <MemberCountChip
                current={gathering.participantCount || 5}
                capacity={gathering.capacity || 20}
                className={cardState === 'closed' ? 'text-orange-400' : ''}
              />
              {cardState === 'confirmation' && <Confirmation />}
            </div>
            <ProgressBar
              current={gathering.participantCount || 5}
              capacity={gathering.capacity || 20}
              barClassName={cardState === 'closed' ? 'bg-orange-400' : ''}
            />
          </div>

          {/* 버튼 */}
          {cardState === 'closed' ? (
            <ClosedButton />
          ) : (
            <JoinNowButton onClick={() => console.log('wow')} />
          )}
        </div>
      </div>

      {state === 'disabled' && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 z-0 flex cursor-not-allowed flex-col items-center justify-center gap-6 overflow-hidden rounded-3xl bg-black bg-opacity-80"
        >
          <div className="text-center text-sm font-medium text-white">
            마감된 챌린지예요, <br />
            다음 기회에 만나요🙏
          </div>
          <RectangleBye />
        </div>
      )}
    </div>
  );
}