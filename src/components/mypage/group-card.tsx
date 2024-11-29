import Image from 'next/image';

import NoImage from '~/src/assets/images/bg-login.png';
import MemberCountChip from '~/src/components/common/member-count-chip';
import formatDateTime from '~/src/utils/format-date-time';

export default function GroupCard() {
  const isUsed = true;
  const dateTime = '2024-11-29T14:30:00.000Z';
  const { date, time } = formatDateTime(dateTime);
  const name = '달램핏 오피스 스트레칭';
  const region = '을지로 3가';
  const current = 20;
  const capacity = 20;

  return (
    <div className="flex h-[308px] w-[311px] border-b-[2px] border-dashed border-secondary-200 mobile:h-[180px] mobile:w-full">
      <Image
        src={NoImage}
        alt="no-image"
        className="h-[156px] w-[311px] rounded-3xl mobile:w-[280px]"
      />
      <div className="h-[156px] w-auto flex-col justify-between">
        <div>
          <div className="flex gap-2">
            <span className="text-lg font-semibold text-secondary-900">
              {name}
            </span>
            <span className="text-lg font-semibold text-secondary-900">|</span>
            <span className="text-sm font-medium text-secondary-700">
              {region}
            </span>
          </div>
          <div className="flex">
            <span className="text-sm font-medium text-secondary-700">
              {date}·{time}
            </span>

            <MemberCountChip current={current} capacity={capacity} />
          </div>
        </div>

        {isUsed ? (
          <button
            className="w-120 h-10 cursor-not-allowed rounded-xl border-[1px] border-orange-600 bg-white px-[22px] py-[10px] text-sm font-semibold text-orange-600"
            disabled
          >
            예약 취소하기
          </button>
        ) : (
          <button className="w-120 h-10 rounded-xl bg-orange-600 px-[22px] py-[10px] text-sm font-semibold text-white">
            리뷰 작성하기
          </button>
        )}
      </div>
    </div>
  );
}
