'use client';
import Image from 'next/image';

import SaveBye from '~/src/assets/icons/circle-bye.svg';
import NoImage from '~/src/assets/images/bg-login.png';
import ChipState from '~/src/components/common/chip-state';
import MemberCountChip from '~/src/components/common/member-count-chip';
import { type GroupCardProps } from '~/src/components/mypage/type';
import CreateReviewModal from '~/src/components/reviews/create-review-modal';
import formatDateTime from '~/src/utils/format-date-time';

export default function GroupCard({ joinedGathering, state }: GroupCardProps) {
  const { date, time } = formatDateTime(joinedGathering.dateTime ?? '');
  const isConfirmed = (joinedGathering.participantCount ?? 0) >= 5;

  return (
    <div className="relative mt-6 flex h-[308px] w-[311px] flex-col gap-4 border-b-[2px] border-dashed border-secondary-200 pb-6 tablet:h-[180px] tablet:w-full tablet:flex-row">
      <Image
        src={joinedGathering.image ? joinedGathering.image : NoImage}
        alt="no-image"
        className="h-[156px] w-[311px] rounded-3xl mobile:w-[280px]"
        width={280}
        height={156}
      />
      <div className="flex h-[156px] w-auto flex-col justify-between">
        <span
          className={`${joinedGathering.isReviewed ? 'hidden' : 'block'} flex h-8 gap-2`}
        >
          <ChipState
            state={joinedGathering.isCompleted ? 'done' : 'scheduled'}
          />
          <ChipState
            state={
              !joinedGathering.isCompleted && isConfirmed
                ? 'confirmed'
                : 'pending'
            }
            className={joinedGathering.isCompleted ? 'hidden' : 'inline-flex'}
          />
        </span>
        <div className="flex flex-col justify-between">
          <div className="flex gap-2">
            <span className="text-lg font-semibold text-secondary-900">
              {joinedGathering.name}
            </span>
            <span className="text-lg font-semibold text-secondary-900">|</span>
            <span className="flex flex-col justify-center text-sm font-medium text-secondary-700">
              {joinedGathering.location}
            </span>
          </div>
          <div className="flex gap-3">
            <span className="text-sm font-medium text-secondary-700">
              {date} · {time}
            </span>

            <MemberCountChip
              current={joinedGathering.participantCount || 5}
              capacity={joinedGathering.capacity || 20}
            />
          </div>
        </div>

        {joinedGathering.isCompleted ? (
          <button
            className="w-120 h-10 cursor-not-allowed rounded-xl border-[1px] border-orange-600 bg-white px-[22px] py-[10px] text-sm font-semibold text-orange-600"
            disabled
          >
            예약 취소하기
          </button>
        ) : (
          // gatheringId 임시 값으로 넣어놨습니다. 추후에 모임 id 넣어주는걸로 수정해주세요!
          <CreateReviewModal gatheringId={1} />
        )}
      </div>
      {state === 'disabled' && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 z-0 flex cursor-not-allowed items-center justify-center overflow-hidden rounded-3xl bg-black bg-opacity-80"
        >
          <div className="text-center text-sm font-medium text-white">
            모집 취소된 모임이에요,
            <br />
            다음 기회에 만나요 🙏
          </div>
          <SaveBye className="absolute right-4 top-4" />
        </div>
      )}
    </div>
  );
}
