import Image from 'next/image';

import bgLoginImage from '~/src/assets/images/bg-login.png';

export default function AuthPageBg() {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-[8px] text-center text-secondary-800">
        <h1 className="white-space-nowrap text-2xl font-semibold">
          Welcome to 같이 달램!
        </h1>
        <p className="white-space-nowrap font-medium">
          바쁜 일상 속 잠깐의 휴식, <br />
          이제는 같이 달램과 함께 해보세요
        </p>
        <div>
          <Image
            src={bgLoginImage}
            alt="login background"
            objectFit="cover"
          ></Image>
        </div>
      </div>
    </>
  );
}
