import Checkbox from '~/src/assets/icons/checkbox';
interface BoxSelectProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export default function BoxSelect({
  title,
  description,
  checked,
  onChange,
}: BoxSelectProps) {
  const toggleChecked = () => {
    onChange(!checked);
  };

  const checkClass = checked === true ? 'bg-secondary-900' : 'bg-secondary-50 ';
  const checkedTitleClass =
    checked === true ? 'text-white' : 'text-secondary-900';
  const checkedDescriptionClass =
    checked === true ? 'text-white' : 'text-secondary-700';
  return (
    <div
      className={`flex h-[76px] w-[109px] gap-[2px] rounded-lg pl-2 pt-[6px] mobile:h-[70px] mobile:w-[149px] mobile:gap-2 mobile:pl-4 mobile:pt-3 ${checkClass}`}
    >
      <Checkbox isChecked={checked} onClick={toggleChecked} />
      <div className="flex-col gap-1 mobile:gap-[2px]">
        <span
          className={`block text-sm font-medium mobile:text-base mobile:font-bold ${checkedTitleClass}`}
        >
          {title}
        </span>
        <span className={`block ${checkedDescriptionClass}`}>
          {description}
        </span>
      </div>
    </div>
  );
}
