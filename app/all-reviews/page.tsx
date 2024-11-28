import ReviewList from '~/src/components/all-reviews/review-list';
import ReviewScore from '~/src/components/all-reviews/review-score';
import GatheringTab from '~/src/components/common/gathering-tab';
import PageTitleWithImage from '~/src/components/common/page-title-with-image';
import MainContainer from '~/src/components/layout/main-container';
import { get } from '~/src/services/api';
import { reviewsQueryKeys } from '~/src/services/reviews/queryKey';
import { type GetReviewListResponse } from '~/src/services/reviews/types';
import {
  getDehydratedInfiniteQuery,
  Hydration,
} from '~/src/services/tanstack-query';

export default async function AllReviewsPage() {
  const state = await getDehydratedInfiniteQuery({
    queryKey: reviewsQueryKeys.reviewList(),
    queryFn: ({ pageParam }) =>
      get<GetReviewListResponse>('/reviews', { params: pageParam }),
    initialPageParam: { limit: 10, offset: 0 },
  });

  return (
    <MainContainer>
      <PageTitleWithImage />
      <GatheringTab />

      <ReviewScore />

      <Hydration state={state}>
        <ReviewList />
      </Hydration>
    </MainContainer>
  );
}
