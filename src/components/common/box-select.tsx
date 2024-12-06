import Checkbox from '~/src/assets/icons/checkbox';
import { cn } from '~/src/utils/class-name';

interface BoxSelectProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  className?: string;
}

export default function BoxSelect({
  title,
  description,
  checked,
  onChange,
  className,
}: BoxSelectProps) {
  const toggleChecked = () => {
    onChange(!checked);
  };

  const checkClass = checked ? 'bg-secondary-900' : 'bg-secondary-50';
  const checkedTitleClass = checked ? 'text-white' : 'text-secondary-900';
  const checkedDescriptionClass = checked ? 'text-white' : 'text-secondary-700';

  return (
    <div
      className={cn(
        `flex h-[76px] w-[109px] gap-[2px] rounded-lg pl-2 pr-3 pt-[6px] tablet:h-[70px] tablet:w-[149px] tablet:gap-2 tablet:pl-4 tablet:pt-3`,
        checkClass,
        className,
      )}
    >
      <Checkbox
        className="shrink-0"
        isChecked={checked}
        onClick={toggleChecked}
      />
      <div className="flex-col gap-1 tablet:gap-[2px]">
        <span
          className={cn(
            `block text-sm font-semibold tablet:text-base`,
            checkedTitleClass,
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            `block break-keep text-xs font-medium`,
            checkedDescriptionClass,
          )}
        >
          {description}
        </span>
      </div>
    </div>
  );
}
