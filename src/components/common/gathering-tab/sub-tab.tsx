import Chip from '~/src/components/common/chip';
import { type GatheringType } from '~/src/services/types';
import { cn } from '~/src/utils/class-name';

interface Props {
  type: GatheringType;
  onChangeFilter: (type: GatheringType) => void;
  className?: string;
}

export default function Sub({ type, onChangeFilter, className }: Props) {
  return (
    <section
      className={cn(
        'flex min-h-10 gap-2 transition-opacity duration-300',
        type === 'WORKATION' && 'opacity-0',
        className,
      )}
    >
      {VALUE.map(({ label, value }) => (
        <Chip
          key={value}
          state={value === type ? 'active' : 'default'}
          onClick={() => onChangeFilter(value)}
        >
          {label}
        </Chip>
      ))}
    </section>
  );
}

const VALUE: Array<{ label: string; value: GatheringType }> = [
  {
    label: '전체',
    value: 'DALLAEMFIT',
  },
  {
    label: '오피스 스트레칭',
    value: 'OFFICE_STRETCHING',
  },
  {
    label: '마인드풀니스',
    value: 'MINDFULNESS',
  },
];
