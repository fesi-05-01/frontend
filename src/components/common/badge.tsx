import { cn } from '~/src/utils/class-name';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  const numericValue =
    typeof children === 'number'
      ? children
      : typeof children === 'string' && !isNaN(Number(children))
        ? Number(children)
        : null;

  const displayText =
    numericValue !== null && numericValue > 999 ? '999+' : children;

  return (
    <span
      className={cn(
        `rounded-[8.5px] bg-gray-900 px-[7px] text-white`,
        className,
      )}
    >
      {displayText}
    </span>
  );
}
