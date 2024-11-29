import { cn } from '~/src/utils/class-name';

interface ChipInfoProps {
  children: React.ReactNode;
  type: 'date' | 'time';
  className?: string;
}

export default function ChipInfo({ children, type, className }: ChipInfoProps) {
  const typeClasses = {
    date: 'text-white',
    time: 'text-orange-600',
  };

  return (
    <span
      className={cn(
        `rounded-[4px] bg-gray-900 px-2 py-[2px] text-sm font-medium ${typeClasses[type]}`,
        className,
      )}
    >
      {children}
    </span>
  );
}
