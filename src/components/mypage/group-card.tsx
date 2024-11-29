import Image from 'next/image';

import Person from '~/src/assets/icons/person.svg?url';
import NoImage from '~/src/assets/images/bg-login.png';

export default function GroupCard() {
  const isReserved = true;
  return (
    <div className="flex h-[308px] w-[311px] border-b-[2px] border-dashed border-secondary-200 mobile:h-[180px] mobile:w-full">
      <Image
        src={NoImage}
        alt="no-image"
        className="h-[156px] w-[311px] rounded-3xl mobile:w-[280px]"
      />
      <div className="h-[156px] w-auto flex-col justify-between">
        <div>
          <div className="flex">
            <span className="">이름</span>
            <span className="">지역</span>
          </div>
          <div className="flex">
            <span className="">날짜</span>
            <Image src={Person} alt="person" width={16} height={16} />
            <span className="">인원수</span>
          </div>
        </div>

        {isReserved ? (
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
