'use client';

import { useState } from 'react';
import { useAtomValue } from 'jotai';

import Button from '~/src/components/common/button';
import { Dialog, DialogTrigger } from '~/src/components/common/modal';
import ContentsForm from '~/src/components/gatherings/create-gathering-modal/contents-form';
import ContentsLogin from '~/src/components/gatherings/create-gathering-modal/contents-login';
import { accessTokenAtom } from '~/src/stores/auth-store';

export default function CreateGatheringModal() {
  const isLoggedIn = !!useAtomValue(accessTokenAtom);

  const [open, setOpen] = useState(false);
  const handleOpenChange = (open: boolean) => {
    setOpen(open);
  };

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button className="w-[115px]">모임 만들기</Button>
      </DialogTrigger>

      {isLoggedIn ? (
        <ContentsForm onOpenChange={handleOpenChange} />
      ) : (
        <ContentsLogin />
      )}
    </Dialog>
  );
}
