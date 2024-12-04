import Image from 'next/image';

import bgLoginImage from '../../assets/images/bg-login.png';

export default function AuthPageBg() {
  return (
    <>
      <div className="white-space-nowrap flex w-full flex-col items-center gap-[8px] px-[24px] pt-[24px] text-center text-secondary-800 desktop:w-1/2 desktop:p-0">
        <h1 className="text-xl font-semibold desktop:text-2xl">
          Welcome to 같이 달램!
        </h1>
        <p className="text-sm font-medium desktop:text-base">
          바쁜 일상 속 잠깐의 휴식, <br />
          이제는 같이 달램과 함께 해보세요
        </p>
        <Image
          src={bgLoginImage}
          alt="login background"
          width={587}
          height={459}
        ></Image>
      </div>
    </>
  );
}
