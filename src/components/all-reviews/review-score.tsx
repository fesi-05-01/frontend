'use client';

import Rating from '~/src/components/common/rating';
import useGetReviewScore from '~/src/services/reviews/use-get-review-score';
import { cn } from '~/src/utils/class-name';

/**
 * NOTE:데이터 연결하고 변경해야함
 */
const MOCK_AVERAGE = 4;
const STAR_COUNT = [27, 19, 2, 0, 0];
const TOTAL_COUNT = STAR_COUNT.reduce((acc, cur) => acc + cur, 0);

export default function ReviewScore() {
  const { data } = useGetReviewScore();

  console.log(data);

  return (
    <section
      className={cn(
        'flex h-[180px] items-center justify-center border-y-2 border-secondary-200 bg-white px-6',
        'mb-4 mt-6 tablet:mb-6',
        'gap-5 tablet:gap-[120px] desktop:gap-[180px]',
      )}
    >
      <div className="flex shrink-0 flex-col items-center gap-2">
        <p className="text-xl font-semibold">
          <span>{MOCK_AVERAGE.toFixed(1)}</span>
          <span className="ml-0.5 text-secondary-400">{`/5`}</span>
        </p>
        <Rating value={MOCK_AVERAGE} />
      </div>

      <div className="flex flex-col gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-[23px_auto_16px] items-center gap-3 text-sm font-medium"
          >
            <span className="text-end tabular-nums">{5 - index}점</span>
            <div
              className={cn(
                'relative h-1 rounded-md bg-secondary-200',
                'w-[84px] tablet:w-[240px]',
              )}
            >
              <div
                className="h-1 rounded-md bg-secondary-950"
                style={{ width: `${(STAR_COUNT[index] / TOTAL_COUNT) * 100}%` }}
              />
            </div>
            <span className="text-secondary-400">{STAR_COUNT[index]}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
