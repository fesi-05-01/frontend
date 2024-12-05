'use client';
import Image from 'next/image';

import bgimage from '~/src/assets/images/bg-profile.png';
import MyProfile from '~/src/assets/images/mypage-profile.png';
import MyProfileEdit from '~/src/assets/images/mypage-profile-edit.png';
import ProfileEdit from '~/src/components/mypage/profile-edit';
import { useGetUserInfo } from '~/src/services/auths/get-user';
export default function ProfileCard() {
  const { data: user } = useGetUserInfo();
  return (
    <>
      <div className="flex h-[178px] w-full flex-col overflow-hidden whitespace-nowrap rounded-3xl border-[2px] border-secondary-200 bg-white tablet:h-[172px]">
        <div className="relative h-16 w-full bg-orange-400">
          <div className="relative left-0 top-0 h-14 w-full border-b-2 border-orange-600">
            <Image
              src={bgimage}
              alt="bg-profile"
              className="absolute h-full w-full object-contain object-[50%] tablet:object-[80%]"
            />
          </div>
          <div className="absolute left-0 top-0 flex w-full items-center justify-between p-4">
            <span className="text-lg font-semibold text-secondary-900">
              내 프로필
            </span>
            <ProfileEdit />
          </div>
          <div className="absolute -bottom-10 left-4">
            <Image
              src={user?.image || MyProfile}
              alt="my-profile"
              width={56}
              height={56}
              className="hidden border-white mobile:block"
            />
            <Image
              src={user?.image || MyProfileEdit}
              width={56}
              height={56}
              className="block border-white mobile:hidden"
              alt="my-profile-edit"
            />
          </div>
        </div>

        <div className="ml-20 flex-1">
          <div className="flex h-full w-full flex-col justify-center gap-2 pl-2">
            <span className="text-base font-semibold text-secondary-800">
              {user?.name}
            </span>
            <div className="flex flex-col gap-[4px]">
              <div className="flex gap-[6px] text-sm">
                <span className="font-medium text-secondary-800">company.</span>
                <span className="text-secondary-700">{user?.companyName}</span>
              </div>
              <div className="flex gap-[24px] text-sm">
                <span className="font-medium text-secondary-800">E-mail.</span>
                <span className="font--normal text-secondary-700">
                  {user?.email}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
