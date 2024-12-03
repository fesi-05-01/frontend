import PageTitleWithImage from '~/src/components/common/page-title-with-image';
import MainContainer from '~/src/components/layout/main-container';
import ReviewContainer from '~/src/components/reviews/review-container';
import ReviewGatheringTab from '~/src/components/reviews/review-gathering-tab';
import ReviewList from '~/src/components/reviews/review-list';
import ReviewScore from '~/src/components/reviews/review-score';
import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import { type GetReviewListResponse } from '~/src/services/reviews/types';
import {
  getDehydratedInfiniteQuery,
  Hydration,
} from '~/src/services/tanstack-query';
import { type PageParam } from '~/src/services/types';

export default async function AllReviewsPage() {
  const state = await getDehydratedInfiniteQuery({
    queryKey: reviewsQueryKeys.reviewList({ type: 'DALLAEMFIT' }),
    queryFn: ({ pageParam }) =>
      get<GetReviewListResponse>('/reviews', {
        params: { type: 'DALLAEMFIT', ...(pageParam as PageParam) },
      }),
    initialPageParam: { limit: 10, offset: 0 },
  });

  return (
    <MainContainer className="flex flex-col">
      <PageTitleWithImage />
      <ReviewGatheringTab />
      <ReviewScore />

      <ReviewContainer>
        <Hydration state={state}>
          <ReviewList />
        </Hydration>
      </ReviewContainer>
    </MainContainer>
  );
}
