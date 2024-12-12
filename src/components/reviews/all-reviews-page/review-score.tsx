'use client';

import ProgressBar from '~/src/components/common/progress-bar';
import Rating from '~/src/components/common/rating';
import useGetReviewScore from '~/src/services/reviews/use-get-review-score';
import { cn } from '~/src/utils/class-name';

export default function ReviewScore() {
  const { data } = useGetReviewScore();

  return (
    <section
      className={cn(
        'flex h-[180px] items-center justify-center border-y-2 border-secondary-200 bg-white px-6',
        'mb-4 mt-6 tablet:mb-6',
        'gap-5 tablet:gap-[120px] desktop:gap-[180px]',
      )}
    >
      {/* 별점 총점 표시 */}
      <div className="flex shrink-0 flex-col items-center gap-2">
        <p className="text-xl font-semibold">
          <span>{data?.average.toFixed(1) || 0}</span>
          <span className="ml-0.5 text-secondary-400">{`/5`}</span>
        </p>
        <Rating value={data?.average || 0} />
      </div>

      {/* 별점 표시*/}
      <div className="flex flex-col gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="grid grid-cols-[23px_auto_16px] items-center gap-3 text-sm"
          >
            <span className="text-end tabular-nums">{5 - index}점</span>
            <ProgressBar
              current={data?.score[index] || 0}
              capacity={data?.sum || 0}
              className="w-[84px] bg-secondary-200 tablet:w-[240px]"
              barClassName="bg-secondary-950"
            />
            <span className="text-secondary-400">
              {data?.score[index] || 0}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
