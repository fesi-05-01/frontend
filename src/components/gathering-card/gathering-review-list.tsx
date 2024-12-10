'use client';

import { useBreakpoint } from 'use-breakpoint';

import Pagination from '~/src/components/gathering-card/pagination';
import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGatheringReview from '~/src/services/gatherings/use-gathering-review';
import { getBreakpoints } from '~/src/utils/breakpoints';

interface Props {
  gatheringId: number;
}

const BREAKPOINTS = getBreakpoints();

export default function GatheringReviewList({ gatheringId }: Props) {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'mobile');
  const { data, isLoading, isError, error, currentPage, setCurrentPage } =
    useGatheringReview({
      gatheringId: Number(gatheringId),
    });

  if (isLoading) return <div>Loading...</div>;
  if (isError) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data</div>;
  }
  if (!data) return <div>데이터가 없습니다</div>;

  const { data: reviews, totalPages } = data;

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
  };

  if (!reviews.length) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <span className="py-10 text-center text-sm font-medium text-gray-500">
          아직 리뷰가 없어요
        </span>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      {reviews.map((review) => (
        <ReviewCardItem
          key={review.id}
          {...review}
          hasImage={false}
          hasTypeDescription
          hasNameTag
        />
      ))}

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
          className="mb-4"
          size={
            breakpoint === 'tablet' || breakpoint === 'desktop'
              ? 'large'
              : 'small'
          }
        />
      )}
    </div>
  );
}
