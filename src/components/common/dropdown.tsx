import { type ComponentPropsWithoutRef } from 'react';

interface dropdownProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'onSelect'> {
  onClick?: (option: string) => void;
  options: string[];
  onSelect: (option: string) => void;
  version: 'Input' | 'Filter'; // width의 차이로 편의상 타입명을 지정하였습니다 기능과는 관련이 없습니다
  selectedOption: string;
}

export default function Dropdown({
  options,
  onSelect,
  version,
  selectedOption,
  ...rest
}: dropdownProps) {
  const handleSelect = (option: string) => {
    onSelect(option);
  };

  return (
    <div
      className={`absolute mt-2 rounded-xl bg-white shadow-lg ${
        version === 'Input' ? 'w-[472px]' : 'w-[110px]'
      }`}
    >
      {options.map((option) => (
        <button
          {...rest}
          key={option}
          onClick={() => handleSelect(option)}
          className={`m-1 block rounded-xl px-4 py-2 text-left hover:bg-secondary-200 ${
            version === 'Input' ? 'w-[464px]' : 'w-[102px]'
          } ${selectedOption === option ? 'bg-orange-100' : ''}`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
