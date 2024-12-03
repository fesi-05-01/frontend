'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import profilelarge from '~/src/assets/images/profile-large.png';
import profilesmall from '~/src/assets/images/profile-small.png';
import Dropdown from '~/src/components/common/dropdown';
import { useAuthStore } from '~/src/store/auth-store';

export default function ProfileDropdown() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const { logOut } = useAuthStore();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === '로그아웃') {
      logOut();
      router.push('/login');
    } else if (option === '마이페이지') {
      router.push('/mypage');
    }
    setIsOpen(false);
  };

  return (
    <div onClick={toggleDropdown} className="relative text-gray-800">
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
