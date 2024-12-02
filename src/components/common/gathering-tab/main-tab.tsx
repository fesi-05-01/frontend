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
    <div className={cn('relative w-fit', className)}>
      <section className="flex gap-3 text-secondary-400">
        <div
          className={cn(
            'flex w-[83px] cursor-pointer items-center gap-1 transition-colors duration-300',
            type !== 'WORKATION' && 'text-secondary-900',
          )}
          onClick={() => onChangeFilter('DALLAEMFIT')}
        >
          <span className="text-lg font-semibold">달램핏</span>
          <DalaemfitIcon />
        </div>

        <div
          className={cn(
            'flex w-[99px] cursor-pointer items-center gap-1 transition-colors duration-300',
            type === 'WORKATION' && 'text-secondary-900',
          )}
          onClick={() => onChangeFilter('WORKATION')}
        >
          <span className="text-lg font-semibold">워케이션</span>
          <WorkationIcon />
        </div>
      </section>

      <div
        className={cn(
          'absolute top-9 h-0.5 bg-secondary-900 transition-transform duration-300',
          type === 'WORKATION'
            ? 'w-[99px] translate-x-[calc(100%-4px)]'
            : 'w-[83px] translate-x-0',
        )}
      />
    </div>
  );
}
