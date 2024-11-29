import CheckIcon from '~/src/assets/icons/check.svg';
import { cn } from '~/src/utils/class-name';

interface ChipStateProps {
  state: 'scheduled' | 'done' | 'confirmed' | 'pending';
  className?: string;
}

export default function ChipState({ state, className }: ChipStateProps) {
  const stateTexts = {
    scheduled: '이용 예정',
    done: '이용 완료',
    confirmed: '개설확정',
    pending: '개설대기',
  };

  const stateClasses = {
    scheduled: 'bg-orange-100 text-orange-600',
    done: 'bg-gray-200 text-gray-500',
    confirmed: 'text-orange-600 border border-orange-100',
    pending: 'border border-gray-200',
  };

  return (
    <span
      className={cn(
        `inline-flex items-center gap-1 rounded-3xl px-3 py-1.5 text-sm font-medium ${stateClasses[state]}`,
        className,
      )}
    >
      {state === 'confirmed' && <CheckIcon />}
      {stateTexts[state]}
    </span>
  );
}
