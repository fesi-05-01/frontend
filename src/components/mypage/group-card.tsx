import Image from 'next/image';

import Person from '~/src/assets/icons/person.svg?url';
import NoImage from '~/src/assets/images/bg-login.png';
import Button from '~/src/components/common/button';
export default function GroupCard() {
  return (
    <div className="h-[308px] w-[311px] border-b-[2px] border-dashed border-secondary-200 mobile:h-[180px] mobile:w-full">
      <Image
        src={NoImage}
        alt="no-image"
        className="h-[156px] w-[311px] rounded-3xl mobile:w-[280px]"
      />
      <div>
        <div className="">
          <span className="">이름</span>
          <span className="">지역</span>
        </div>
        <div>
          <span className="">날짜</span>
          <Image src={Person} alt="person" width={16} height={16} />
          <span className="">인원수</span>
        </div>
        <Button className="w-120 h-10 text-sm font-semibold">
          리뷰 작성하기
        </Button>
      </div>
    </div>
  );
}
