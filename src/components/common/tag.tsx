import AlarmIcon from '~/src/assets/icons/alarm.svg';

interface TagProps {
  size: 'small' | 'large';
  children: React.ReactNode;
}

export default function Tag({ children, size }: TagProps) {
  const sizeClasses = {
    small: 'pr-2.5',
    large: 'pr-4 rounded-tr-[22px]',
  };
  return (
    <span
      className={`inline-flex gap-1 rounded-bl-xl bg-orange-600 py-1 pl-2 text-white ${sizeClasses[size]}`}
    >
      <AlarmIcon />
      {children}
    </span>
  );
}
