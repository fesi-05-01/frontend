import Button from '~/src/components/common/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '~/src/components/common/modal';
import { ScrollArea } from '~/src/components/common/scroll-area';
import { cn } from '~/src/utils/class-name';

export default function CreateGatheringModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-[115px]">모임 만들기</Button>
      </DialogTrigger>

      <DialogContent
        className={cn(
          'flex h-dvh flex-col tablet:h-[calc(100dvh-48px)] desktop:h-dvh',
          'max-tablet:max-w-full max-tablet:rounded-none max-tablet:px-4 max-tablet:pb-3',
        )}
      >
        <DialogHeader>
          <DialogTitle>모임만들기</DialogTitle>
        </DialogHeader>

        <ScrollArea className="grow"></ScrollArea>

        <DialogFooter>
          <Button size="small">확인</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
