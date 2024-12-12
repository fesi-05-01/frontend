import DalaemfitIcon from '~/src/assets/icons/dalaemfit.svg';
import WorkationIcon from '~/src/assets/icons/workation.svg';
import { type GatheringType } from '~/src/services/types';
import { cn } from '~/src/utils/class-name';

interface Props {
  type: GatheringType;
  onChangeFilter: (type: GatheringType) => void;
  className?: string;
}

export default function Main({ type, onChangeFilter, className }: Props) {
  return (
    <section className={cn('relative w-fit', className)}>
      {/* 탭 버튼 */}
      <div className="flex gap-3">
        {GATHERING_TAB.map((tab) => (
          <div
            key={tab.type}
            className={cn(
              'flex w-[83px] cursor-pointer items-center gap-1 transition-colors duration-300',
              tab.width,
              !tab.name.includes(type) && 'text-secondary-400',
            )}
            onClick={() => onChangeFilter(tab.type as GatheringType)}
          >
            <span className="text-lg font-semibold">{tab.label}</span>
            <tab.icon />
          </div>
        ))}
      </div>

      {/* 하단 바 */}
      <div
        className={cn(
          'absolute top-9 h-0.5 bg-secondary-900 transition-transform duration-300',
          type === 'WORKATION'
            ? 'w-[99px] translate-x-[calc(100%-4px)]'
            : 'w-[83px] translate-x-0',
        )}
      />
    </section>
  );
}

const GATHERING_TAB = [
  {
    type: 'DALLAEMFIT',
    name: ['DALLAEMFIT', 'OFFICE_STRETCHING', 'MINDFULNESS'],
    label: '달램핏',
    width: 'w-[83px]',
    icon: DalaemfitIcon,
  },
  {
    type: 'WORKATION',
    name: ['WORKATION'],
    label: '워케이션',
    width: 'w-[99px]',
    icon: WorkationIcon,
  },
];
