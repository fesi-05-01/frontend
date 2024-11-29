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
        `flex rounded-lg pr-3 mobile:h-[76px] mobile:w-[109px] mobile:gap-[2px] mobile:pl-2 mobile:pt-[6px] tablet:h-[70px] tablet:w-[149px] tablet:gap-2 tablet:pl-4 tablet:pt-3`,
        checkClass,
        className,
      )}
    >
      <Checkbox isChecked={checked} onClick={toggleChecked} />
      <div className="flex-col mobile:gap-1 tablet:gap-[2px]">
        <span
          className={cn(
            `block font-semibold mobile:text-sm tablet:text-base`,
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
