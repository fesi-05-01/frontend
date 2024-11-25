interface ChipProps {
  children: React.ReactNode;
  size: 'small' | 'large';
  state: 'active' | 'default';
  onClick?: () => void;
}

export default function Chip({ children, size, state, onClick }: ChipProps) {
  const sizeClasses = {
    small: 'px-4 py-2.5',
    large: 'px-3 py-2',
  };

  const stateClasses = {
    active: 'bg-gray-900 text-white',
    default: 'bg-gray-200 text-black',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-xl text-sm font-medium ${sizeClasses[size]} ${stateClasses[state]}`}
    >
      {children}
    </button>
  );
}
