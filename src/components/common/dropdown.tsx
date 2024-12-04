import { useEffect, useRef } from 'react';
import { type ComponentPropsWithoutRef } from 'react';

import { cn } from '~/src/utils/class-name';

interface DropdownProps
  extends Omit<ComponentPropsWithoutRef<'button'>, 'onClick' | 'onSelect'> {
  onClick?: (option: string) => void;
  options: string[];
  onSelect: (option: string) => void;
  version: 'Login' | 'Filter';
  selectedOption: string;
  className?: string;
  onClose?: () => void;
  filterRef?: React.RefObject<HTMLButtonElement>;
}

export default function Dropdown({
  options,
  onSelect,
  version,
  selectedOption,
  className,
  onClose,
  filterRef,
  ...rest
}: DropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current?.contains(target) ||
        filterRef?.current?.contains(target)
      ) {
        return;
      }

      onClose?.();
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, filterRef]);

  const handleSelect = (option: string) => {
    onSelect(option);
  };

  return (
    <div
      ref={dropdownRef}
      className={cn(
        'absolute z-50 mt-2 rounded-xl bg-white shadow-lg',
        version === 'Filter'
          ? 'w-full min-w-[120px]'
          : 'w-[110px] desktop:w-[142px]',
        className,
      )}
    >
      {options.map((option) => (
        <button
          {...rest}
          key={option}
          onClick={() => handleSelect(option)}
          className={cn(
            'm-1 block w-[calc(100%-8px)] rounded-xl px-2 py-2 text-left text-sm font-medium hover:bg-secondary-200',
            version === 'Filter' ? '' : 'h-10 desktop:h-11',
            selectedOption === option ? 'bg-orange-100' : '',
            className,
          )}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
