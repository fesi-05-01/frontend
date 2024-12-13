'use client';

import { useState } from 'react';

import Button from '~/src/components/common/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const handleJoinToggle = () => {
    if (isParticipant) {
      setIsDialogOpen(true);
    } else {
      joinGathering(gatheringId);
    }
  };

  const handleDialogConfirm = () => {
    leaveGathering(gatheringId);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="opacity-0"> 모임 나가기 </DialogTitle>
          </DialogHeader>
          <p className="flex justify-center">
            정말 모임 참여를 취소하시겠습니까?
          </p>

          <DialogFooter className="flex w-full justify-end">
            <Button
              className="w-[120px]"
              type="button"
              onClick={handleDialogConfirm}
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button className="w-[115px]" type="button" onClick={handleJoinToggle}>
        {isParticipant ? '취소하기' : '참여하기'}
      </Button>
    </>
  );
}
