import { cn } from '~/src/utils/class-name';

interface ProgressBarProps {
  current: number; // 현재 등록한 인원
  capacity: number; // 최대 수용 인원
  className?: string;
}

export default function ProgressBar({
  current,
  capacity,
  className,
}: ProgressBarProps) {
  const progressPercentage = Math.min((current / capacity) * 100, 100);

  return (
    <div className={cn(`h-[60px] w-full px-6 pb-4 pt-2`, className)}>
      <div className="relative h-1 rounded-md bg-white">
        <div
          className="h-1 rounded-md bg-orange-600"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
