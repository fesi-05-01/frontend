import Image from 'next/image';

import bgLoginImage from '~/src/assets/images/bg-login.png';

export default function AuthPageBg() {
  return (
    <>
      <div className="white-space-nowrap flex w-full flex-col items-center gap-[8px] text-center text-secondary-800">
        <h1 className="text-xl font-semibold tablet:text-2xl">
          Welcome to 같이 달램!
        </h1>
        <p className="text-sm font-medium tablet:text-base">
          바쁜 일상 속 잠깐의 휴식, <br />
          이제는 같이 달램과 함께 해보세요
        </p>
        <div>
          <Image
            src={bgLoginImage}
            alt="login background"
            width={587}
            height={459}
            // objectFit="contain"
          ></Image>
        </div>
      </div>
    </>
  );
}
