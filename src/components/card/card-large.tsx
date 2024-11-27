'use client';

import Image from 'next/image';

import SaveBye from '~/src/assets/icons/circle-bye.svg';
import Save from '~/src/assets/icons/save';
import Confirmation from '~/src/components/card/confirmation';
import JoinNowButton from '~/src/components/card/join-now-button';
import MemberCountChip from '~/src/components/card/member-count-chip';
import ChipInfo from '~/src/components/common/chip-info';
import ProgressBar from '~/src/components/common/progress-bar';
import Tag from '~/src/components/common/tag';
import { type Gathering } from '~/src/services/gatherings/types';

interface CardProps {
  state: 'default' | 'disabled';
  gathering: Gathering;
}

export default function CardLarge({ state, gathering }: CardProps) {
  return (
    <div
      className={`relative flex rounded-3xl border-2 border-gray-100 transition-shadow hover:border-gray-200 hover:shadow-card-hover`}
    >
      <Save className="absolute right-4 top-4" />

      {/* 이미지 */}
      <div className="relative h-[156px] w-[280px] flex-shrink-0">
        {/* 이미지 없으면 그냥 하얗게 비워놓음 */}
        {gathering.image && (
          <Image
            src={gathering.image}
            alt="cat"
            layout="fill"
            objectFit="fill"
            className="rounded-l-3xl"
          />
        )}

        <Tag size="small" className="absolute right-0 top-0">
          오늘 21시 마감
        </Tag>
      </div>

      {/* 이미지 빼고 */}
      <div className="flex w-full flex-col">
        {/* 위 */}
        <div className="flex flex-col">
          {/* 제목이랑 칩이랑 */}
          <div className="mb-5 ml-6 mt-4 flex flex-col gap-2">
            {/* 타이틀 */}
            <div className="flex items-center gap-2">
              <span className="text-lg font-semibold">{gathering.name}</span>
              <span className="text-lg font-semibold">|</span>
              <span className="text-sm font-medium text-gray-700">
                {gathering.location}
              </span>
            </div>
            {/* chip-info */}
            <div className="flex gap-2">
              <ChipInfo type="date">{gathering.date}</ChipInfo>
              <ChipInfo type="time">{gathering.time}</ChipInfo>
            </div>
          </div>
        </div>

        {/* 아래 */}
        {/* container-progress */}
        <div className="flex items-end justify-between gap-6 px-6 pb-4 pt-2">
          {/* bar랑 그 위에 상태창 */}
          <div className="flex w-full flex-col gap-2">
            {/* 인원수랑 개설확정 */}
            <div className="flex gap-2">
              <MemberCountChip current={10} capacity={20} />
              <Confirmation />
            </div>
            <ProgressBar current={10} capacity={20} />
          </div>

          {/* 버튼 */}
          <JoinNowButton onClick={() => console.log('wow')} />
          {/* <ClosedButton /> */}
        </div>
      </div>

      {state === 'disabled' && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute inset-0 z-10 flex cursor-not-allowed items-center justify-center rounded-3xl bg-black bg-opacity-80"
        >
          <div className="text-center text-sm font-medium text-white">
            마감된 챌린지예요, <br />
            다음 기회에 만나요🙏
          </div>
          <SaveBye className="absolute right-4 top-4" />
        </div>
      )}
    </div>
  );
}
