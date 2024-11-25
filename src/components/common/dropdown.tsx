export default function Dropdown({
  options,
  onSelect,
  type,
}: {
  options: string[];
  onSelect: (option: string) => void;
  type: 'Left' | 'Right';
}) {
  return (
    <div
      className={`absolute mt-2 w-full rounded border border-gray-300 bg-white shadow-lg ${
        type === 'Left' ? 'left-0' : 'right-0'
      }`}
    >
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onSelect(option)}
          className="block w-full px-4 py-2 text-left hover:bg-gray-100"
        >
          {option}
        </button>
      ))}
    </div>
  );
}
