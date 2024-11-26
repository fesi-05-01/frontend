import Checkbox from '~/src/assets/icons/checkbox';
interface BoxSelectProps {
  title: string;
  description: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  size: 'small' | 'large';
}

export default function BoxSelect({
  title,
  description,
  checked,
  onChange,
  size,
}: BoxSelectProps) {
  const toggleChecked = () => {
    onChange(!checked);
  };

  const containerClass =
    size === 'small'
      ? 'pl-2 pt-[6px] h-[76px] gap-[2px]'
      : 'pl-4 pt-3 gap-2 h-[70px]';
  const titleClass =
    size === 'small' ? 'font-medium text-sm' : 'font-bold text-base';
  const checkClass = checked === true ? 'bg-secondary-900' : 'bg-secondary-50 ';
  const checkedTitleClass =
    checked === true ? 'text-white' : 'text-secondary-900';
  const checkedDescriptionClass =
    checked === true ? 'text-white' : 'text-secondary-700';
  return (
    <div className={`flex w-40 rounded-lg ${containerClass} ${checkClass}`}>
      <Checkbox isChecked={checked} onClick={toggleChecked} />
      <div className={`flex-col ${size === 'small' ? 'gap-1' : 'gap-[2px]'}`}>
        <span className={`block text-base ${titleClass} ${checkedTitleClass}`}>
          {title}
        </span>
        <span className={`block ${checkedDescriptionClass}`}>
          {description}
        </span>
      </div>
    </div>
  );
}
