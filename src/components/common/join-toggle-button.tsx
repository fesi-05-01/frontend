'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAtom } from 'jotai';

import Button from '~/src/components/common/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/src/components/common/modal';
import { useJoinGathering } from '~/src/services/gatherings/use-join-gathering';
import { useLeaveGathering } from '~/src/services/gatherings/use-leave-gathering';
import { userInfoAtom } from '~/src/stores/auth-store';

interface JoinButtonProps {
  gatheringId: number;
  isParticipant: boolean;
}

export default function JoinButton({
  gatheringId,
  isParticipant,
}: JoinButtonProps) {
  const { mutate: joinGathering } = useJoinGathering();
  const { mutate: leaveGathering } = useLeaveGathering();
  const [open, setOpen] = useState(false);
  const [user] = useAtom(userInfoAtom);
  const router = useRouter();

  const handleJoin = () => {
    joinGathering(gatheringId);
  };

  const handleConfirmCancel = () => {
    leaveGathering(gatheringId);
    setOpen(false);
  };

  const handleLoginSuccess = () => {
    setOpen(false);
    router.push('/login');
  };
  return (
    <>
      {user ? (
        isParticipant ? (
          <Button
            className="w-[115px]"
            type="button"
            variant="outlined"
            onClick={handleConfirmCancel}
          >
            취소하기
          </Button>
        ) : (
          <Button className="w-[115px]" type="button" onClick={handleJoin}>
            참여하기
          </Button>
        )
      ) : (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-[115px]" type="button">
              참여하기
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="opacity-0">로그인</DialogTitle>
            </DialogHeader>
            <p className="flex justify-center">로그인이 필요합니다.</p>
            <DialogFooter className="flex w-full justify-end">
              <Button
                className="w-[120px]"
                type="button"
                onClick={handleLoginSuccess}
              >
                확인
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
