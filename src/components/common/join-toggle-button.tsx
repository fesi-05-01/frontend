'use client';

import { useState } from 'react';

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

  const handleJoin = () => {
    joinGathering(gatheringId);
  };

  const handleConfirmCancel = () => {
    leaveGathering(gatheringId);
    setOpen(false);
  };

  return (
    <>
      {isParticipant ? (
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button variant="outlined" className="w-[115px]" type="button">
              취소하기
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="opacity-0">모임 취소하기</DialogTitle>
            </DialogHeader>
            <p className="flex justify-center">정말 모임을 취소하시겠습니까?</p>
            <DialogFooter className="flex w-full justify-end">
              <Button
                className="w-[120px]"
                type="button"
                onClick={handleConfirmCancel}
              >
                확인
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ) : (
        <Button className="w-[115px]" type="button" onClick={handleJoin}>
          참여하기
        </Button>
      )}
    </>
  );
}
