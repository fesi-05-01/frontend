'use client';

import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGetReviewList from '~/src/services/reviews/use-get-review-list';

export default function ReviewList() {
  const { data, isFetching } = useGetReviewList();

  return (
    <div className="flex grow flex-col">
      {/* 데이터 있을때 */}
      {data?.map((data) => (
        <ReviewCardItem key={data.id} {...data} hasImage hasTypeDescription />
      ))}

      {/* 첫 페칭이 끝나고 데이터 없을때 */}
      {!isFetching && data?.length === 0 && (
        <div className="flex grow items-center justify-center">
          <p className="text-sm text-secondary-500">아직 리뷰가 없어요</p>
        </div>
      )}
    </div>
  );
}
