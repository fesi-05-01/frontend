'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import profilelarge from '~/src/assets/images/profile-large.png';
import profilesmall from '~/src/assets/images/profile-small.png';
import Dropdown from '~/src/components/common/dropdown';
import { useGetUserInfo } from '~/src/services/auths/get-user';
import { useLogout } from '~/src/services/auths/use-logout';

export default function ProfileDropdown() {
  const { data: user } = useGetUserInfo();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { mutate: logout } = useLogout();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === '로그아웃') {
      logout();
    } else if (option === '마이페이지') {
      router.push('/mypage');
    }
    setIsOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className="relative text-gray-800">
      {user?.image ? (
        <Image
          src={user.image}
          width={40}
          height={40}
          className="rounded-full"
          alt="profile"
        />
      ) : (
        <>
          <Image
            className="hidden tablet:block"
            src={profilelarge}
            alt="profile-large"
            width={40}
            height={40}
          />
          <Image
            className="block tablet:hidden"
            src={profilesmall}
            alt="profile-small"
            width={40}
            height={40}
          />
        </>
      )}

      {isOpen && (
        <Dropdown
          className="right-0"
          options={['마이페이지', '로그아웃']}
          onSelect={handleSelect}
          version="Login"
          selectedOption={selectedOption}
        />
      )}
    </div>
  );
}
