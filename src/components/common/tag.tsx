import AlarmIcon from '~/src/assets/icons/alarm.svg';
import { cn } from '~/src/utils/class-name';

interface TagProps {
  size: 'small' | 'large';
  children: React.ReactNode;
  className?: string;
}

export default function Tag({ children, size, className }: TagProps) {
  const sizeClasses = {
    small: 'pr-2.5',
    large: 'pr-4 rounded-tr-[22px]',
  };
  return (
    <span
      className={cn(
        `inline-flex gap-1 rounded-bl-xl bg-orange-600 py-1 pl-2 text-white ${sizeClasses[size]}`,
        className,
      )}
    >
      <AlarmIcon />
      {children}
    </span>
  );
}
