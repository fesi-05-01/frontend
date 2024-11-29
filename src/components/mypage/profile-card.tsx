import Image from 'next/image';

import CircleEdit from '~/src/assets/icons/circle-edit.svg?url';
import MyProfile from '~/src/assets/images/mypage-profile.png';
import MyProfileEdit from '~/src/assets/images/mypage-profile-edit.png';
export default function ProfileCard() {
  return (
    <div className="h-[178px] w-[343px] rounded-3xl border-[2px] border-secondary-200 bg-white mobile:h-[172px] mobile:w-full desktop:w-[996px]">
      <div className="relative left-[-1px] h-[66px] w-[calc(100%+2px)] rounded-t-3xl bg-orange-400">
        <span className="absolute bottom-[7px] left-0 h-[0px] w-full border-[2px] border-orange-600"></span>
        <div className="flex justify-between">
          <span className="text-lg font-semibold text-secondary-900">
            내 프로필
          </span>
          <Image
            src={CircleEdit}
            alt="circle-edit"
            width={32}
            height={32}
            className="rounded-2xl"
          />
        </div>
      </div>
      <Image
        src={MyProfile}
        alt="my-profile"
        width={56}
        height={56}
        className="hidden rounded-full border-[2px] border-white mobile:block"
      />
      <Image
        src={MyProfileEdit}
        width={56}
        height={56}
        className="block rounded-full border-[2px] border-white mobile:hidden"
        alt="my-profile-edit"
      />
      <div className="h-[77px] w-[190px]">
        <span className="text-base font-semibold text-secondary-800">이름</span>
        <div>
          <div className="gap-[6px] text-sm">
            <span className="font-medium text-secondary-800">company.</span>
            <span className="font--normal text-secondary-700">회사</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="font-medium text-secondary-800">E-mail.</span>
            <span className="font--normal text-secondary-700">이메일</span>
          </div>
        </div>
      </div>
    </div>
  );
}
