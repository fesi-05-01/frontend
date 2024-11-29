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
        `flex h-[76px] w-[109px] gap-[2px] rounded-lg pl-2 pr-3 pt-[6px] mobile:h-[70px] mobile:w-[149px] mobile:gap-2 mobile:pl-4 mobile:pt-3`,
        checkClass,
        className,
      )}
    >
      <Checkbox isChecked={checked} onClick={toggleChecked} />
      <div className="flex-col gap-1 mobile:gap-[2px]">
        <span
          className={cn(
            `block text-sm font-semibold mobile:text-base`,
            checkedTitleClass,
            className,
          )}
        >
          {title}
        </span>
        <span
          className={cn(
            `block break-keep text-xs font-medium`,
            checkedDescriptionClass,
            className,
          )}
        >
          {description}
        </span>
      </div>
    </div>
  );
}
