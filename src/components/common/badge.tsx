interface BadgeProps {
  children: React.ReactNode;
}

export default function Badge({ children }: BadgeProps) {
  const numericValue =
    typeof children === 'number'
      ? children
      : typeof children === 'string' && !isNaN(Number(children))
        ? Number(children)
        : null;

  const displayText =
    numericValue !== null && numericValue > 999 ? '999+' : children;

  return (
    <span className="rounded-[8.5px] bg-gray-900 px-[7px] text-white">
      {displayText}
    </span>
  );
}
