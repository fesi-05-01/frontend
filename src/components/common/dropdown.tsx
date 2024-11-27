import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface dropdownProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'onSelect'> {
  onClick?: (option: string) => void;
  options: string[];
  onSelect: (option: string) => void;
  version: 'Login' | 'Filter'; // width의 차이로 편의상 타입명을 지정하였습니다 기능과는 관련이 없습니다
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
      className={cn(
        'absolute mt-2 rounded-xl bg-white shadow-lg',
        version === 'Filter' ? 'w-full' : 'w-[110px] desktop:w-[142px]',
      )}
    >
      {options.map((option) => (
        <button
          {...rest}
          key={option}
          onClick={() => handleSelect(option)}
          className={cn(
            'm-1 block rounded-xl px-4 py-2 text-left hover:bg-secondary-200',
            version === 'Filter'
              ? 'w-[calc(100%-8px)]'
              : 'h-10 w-[calc(100%-8px)] desktop:h-11',
            selectedOption === option ? 'bg-orange-100' : '',
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
