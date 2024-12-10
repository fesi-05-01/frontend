import { cn } from '~/src/utils/class-name';

interface MoreHorizontalProps {
  className?: string;
}

export default function MoreHorizontal({ className }: MoreHorizontalProps) {
  return (
    <div className={cn('flex h-4 w-4 items-center justify-between', className)}>
      <div className="h-1 w-1 rounded-full bg-neutral-400"></div>
      <div className="h-1 w-1 rounded-full bg-neutral-400"></div>
      <div className="h-1 w-1 rounded-full bg-neutral-400"></div>
    </div>
  );
}
