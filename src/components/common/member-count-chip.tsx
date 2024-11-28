import PersonIcon from '~/src/assets/icons/person.svg';
import { cn } from '~/src/utils/class-name';

interface MemberCountChipProps {
  current: number;
  capacity: number;
  className?: string;
}

export default function MemberCountChip({
  current,
  capacity,
  className,
}: MemberCountChipProps) {
  return (
    <span
      className={cn(
        `inline-flex items-center gap-0.5 text-sm font-medium text-gray-700`,
        className,
      )}
    >
      <PersonIcon className={className} />

      <span className="d">
        {current}/{capacity}
      </span>
    </span>
  );
}
