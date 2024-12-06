import ReviewCardItem from '~/src/components/reviews/review-card-item';
import useGatheringReview from '~/src/services/gatherings/use-gathering-review';

interface Props {
  gatheringId: number;
}

export default function GatheringReviewList({ gatheringId }: Props) {
  const { data, isLoading, isError, error } = useGatheringReview(
    Number(gatheringId),
  );

  if (isLoading) return <div>Loading...</div>;

  if (isError) {
    console.error('Error fetching data: ', error);
    return <div>Error loading data</div>;
  }

  return (
    <div className="">
      {data && data.length > 0 ? (
        data.map((review) => (
          <ReviewCardItem
            key={review.id}
            {...review}
            hasImage={false}
            hasTypeDescription
            hasNameTag
          />
        ))
      ) : (
        <div className="flex flex-1 items-center justify-center">
          <span className="py-10 text-center text-sm font-medium text-gray-500">
            아직 리뷰가 없어요
          </span>
        </div>
      )}
    </div>
  );
}
