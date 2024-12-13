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
        <DialogContent className="flex h-[212px] flex-col items-center justify-between gap-0 p-6 text-center">
          <DialogHeader>
            <DialogTitle></DialogTitle>
          </DialogHeader>
          <p>정말 모임을 취소하시겠습니까?</p>

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
        onClick={() => setIsDialogOpen(true)}
        type="button"
        variant="outlined"
      >
        취소하기
      </Button>
    </>
  );
}
