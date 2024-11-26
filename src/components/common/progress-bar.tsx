import { cn } from '~/src/utils/class-name';

interface ProgressBarProps {
  current: number; // 현재 등록한 인원
  capacity: number; // 최대 수용 인원
  className?: string; // 바깥 컴포넌트
  barClassName?: string; // 주황색 바 색깔 변경 시
}

export default function ProgressBar({
  current,
  capacity,
  className,
  barClassName,
}: ProgressBarProps) {
  const progressPercentage = Math.min((current / capacity) * 100, 100);

  return (
    <div className={cn(`h-[60px] w-full px-6 pb-4 pt-2`, className)}>
      <div className="relative h-1 rounded-md bg-orange-50">
        <div
          className={cn(`h-1 rounded-md bg-orange-600`, barClassName)}
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
    </div>
  );
}
