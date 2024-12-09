'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from '~/src/components/common/avatar';
import Button from '~/src/components/common/button';
import Dropdown from '~/src/components/common/dropdown';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '~/src/components/common/modal';
import { useGetUserInfo } from '~/src/services/auths/get-user';
import { useLogout } from '~/src/services/auths/use-logout';

export default function ProfileDropdown() {
  const { data: user } = useGetUserInfo();
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const { mutate: logout } = useLogout();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelect = (option: string) => {
    setSelectedOption(option);
    if (option === '로그아웃') {
      setIsDialogOpen(true);
    } else if (option === '마이페이지') {
      router.push('/mypage');
    }
    setIsOpen(false);
  };
  const handleLogoutConfirm = () => {
    logout();
    setIsDialogOpen(false);
  };

  const handleDialogClose = () => {
    setIsDialogOpen(false);
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

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex h-[212px] flex-col items-center justify-between gap-0 p-6 text-center">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <p>로그아웃 하시겠습니까?</p>
          <DialogFooter className="flex w-[249px] gap-4">
            <Button
              type="button"
              variant="outlined"
              onClick={handleDialogClose}
            >
              취소
            </Button>
            <Button type="button" onClick={handleLogoutConfirm}>
              {' '}
              확인{' '}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
