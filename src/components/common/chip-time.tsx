interface ChipTimeProps {
  children: React.ReactNode;
  state: 'active' | 'inactive' | 'disabled';
  onClick?: () => void;
}

export default function ChipTime({ children, state, onClick }: ChipTimeProps) {
  const stateClasses = {
    active: 'bg-gray-900 text-white',
    inactive: 'bg-gray-50 text-gray-900 border border-gray-200',
    disabled: 'bg-gray-200 text-gray-400 cursor-not-allowed',
  };

  return (
    <button
      onClick={onClick}
      className={`rounded-lg px-3 py-1.5 text-sm font-medium ${stateClasses[state]}`}
    >
      {children}
    </button>
  );
}
