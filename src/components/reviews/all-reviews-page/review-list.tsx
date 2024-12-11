'use client';

import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGetReviewInfiniteList from '~/src/services/reviews/use-get-review-infinite-list';

export default function ReviewList() {
  const { ref, inView } = useInView();

  const { data, hasNextPage, isFetching, fetchNextPage } =
    useGetReviewInfiniteList();

  useEffect(() => {
    if (!inView) return;

    if (!isFetching && hasNextPage) {
      fetchNextPage();
    }
  }, [fetchNextPage, hasNextPage, inView, isFetching]);

  return (
    <div className="flex grow flex-col">
      {/* 데이터 있을때 */}
      <div>
        {data?.map((data) => (
          <ReviewCardItem
            key={data.id}
            {...data}
            hasImage
            hasTypeDescription
            hasNameTag
          />
        ))}

        {!isFetching && hasNextPage && data && (
          <div ref={ref} className="h-10" />
        )}
      </div>

      {/* 첫 페칭이 끝나고 데이터 없을때 */}
      {!isFetching && data?.length === 0 && (
        <div className="flex grow items-center justify-center">
          <p className="text-sm text-secondary-500">아직 리뷰가 없어요</p>
        </div>
      )}
    </div>
  );
}
