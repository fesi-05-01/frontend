'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

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
import { useLogout } from '~/src/services/auths/use-logout';
import { userInfoAtom } from '~/src/stores/auth-store';
export default function ProfileDropdown() {
  const [user] = useAtom(userInfoAtom);
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
      <Avatar className="cursor-pointer" size="medium">
        <AvatarImage src={user?.image}></AvatarImage>
        <AvatarFallback />
      </Avatar>

      {isOpen && (
        <Dropdown
          className="right-0 desktop:left-0"
          options={['마이페이지', '로그아웃']}
          onSelect={handleSelect}
          version="Login"
          selectedOption={selectedOption}
          onClose={() => setIsOpen(false)}
        />
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="flex h-[199px] w-[300px] flex-col items-center justify-between gap-0 p-6 text-center tablet:h-[188px] tablet:w-[450px]">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <p>로그아웃 하시겠습니까?</p>
          <DialogFooter className="flex w-[249px] justify-end gap-4">
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
