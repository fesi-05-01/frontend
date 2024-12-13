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
import { useCancelGathering } from '~/src/services/gatherings/use-cancel-gathering';

interface CancelGatheringButtonProps {
  gatheringId: number;
}

export default function CancelGatheringButton({
  gatheringId,
}: CancelGatheringButtonProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const { mutate: cancelGathering } = useCancelGathering();

  const handleCancelGathering = () => {
    cancelGathering(gatheringId);
    setIsDialogOpen(false);
  };

  return (
    <>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="opacity-0"> 모임 취소하기 </DialogTitle>
          </DialogHeader>
          <p className="flex justify-center">정말 모임을 취소하시겠습니까?</p>

          <DialogFooter className="flex w-full justify-end">
            <Button
              className="w-[120px]"
              type="button"
              onClick={handleCancelGathering}
            >
              확인
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Button
        type="button"
        variant="outlined"
        onClick={() => setIsDialogOpen(true)}
      >
        취소하기
      </Button>
    </>
  );
}
