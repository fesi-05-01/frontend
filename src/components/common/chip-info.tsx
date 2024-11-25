interface ChipInfoProps {
  children: React.ReactNode;
  type: 'date' | 'time';
}

export default function ChipInfo({ children, type }: ChipInfoProps) {
  const typeClasses = {
    date: 'text-white',
    time: 'text-orange-600',
  };

  return (
    <span
      className={`rounded-[4px] bg-gray-900 px-2 py-[2px] text-sm font-medium ${typeClasses[type]}`}
    >
      {children}
    </span>
  );
}
