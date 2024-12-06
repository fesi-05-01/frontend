'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/src/components/common/avatar';
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
      <Avatar size="medium">
        <AvatarImage src={user?.image}></AvatarImage>
        <AvatarFallback />
      </Avatar>

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
