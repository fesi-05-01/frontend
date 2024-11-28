import ChipInfo from '~/src/components/common/chip-info';
import { cn } from '~/src/utils/class-name';
import formatDateTime from '~/src/utils/format-date-time';

interface ChipInfoContainerProps {
  dateTime: string;
  className?: string;
}

export default function ChipInfoContainer({
  dateTime,
  className,
}: ChipInfoContainerProps) {
  const { date, time } = formatDateTime(dateTime);

  return (
    <div className={cn(`flex gap-2`, className)}>
      <ChipInfo type="date">{date}</ChipInfo>
      <ChipInfo type="time">{time}</ChipInfo>
    </div>
  );
}
