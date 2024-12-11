import GatheringDetailContent from '~/src/components/gathering-card/gathering-detail-content';
import GatheringReviewList from '~/src/components/gathering-card/gathering-review-list';
import MainContainer from '~/src/components/layout/main-container';
import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import {
  type GetGatheringDetailResponse,
  type GetGatheringReviewResponse,
} from '~/src/services/gatherings/types';
import { getDehydratedQuery, Hydration } from '~/src/services/tanstack-query';

interface Props {
  params: {
    id: string;
  };
}

export default async function GatheringItemPage({ params }: Props) {
  const detailState = await getDehydratedQuery({
    queryKey: gatheringsQueryKeys.gatheringDetail({ id: Number(params.id) }),
    queryFn: () => get<GetGatheringDetailResponse>(`/gatherings/${params.id}`),
  });

  const reviewState = await getDehydratedQuery({
    queryKey: gatheringsQueryKeys.gatheringReview({
      gatheringId: Number(params.id),
    }),
    queryFn: () =>
      get<GetGatheringReviewResponse>('/reviews', {
        params: {
          gatheringId: Number(params.id),
          limit: 5,
        },
      }),
  });

  return (
    <MainContainer className="flex flex-col">
      <div className="mt-6 grid flex-1 grid-cols-1 grid-rows-[auto_auto_1fr] gap-y-4 tablet:grid-cols-2 tablet:grid-rows-[auto_1fr] tablet:gap-x-[14px] tablet:gap-y-[21px] desktop:mt-10 desktop:gap-x-6">
        <Hydration state={detailState}>
          <GatheringDetailContent gatheringId={Number(params.id)} />
        </Hydration>
        <div className="flex flex-col border-t-2 border-gray-200 bg-white p-6 tablet:col-span-2">
          <h3 className="text-lg font-semibold">
            이용자들은 이 프로그램을 이렇게 느꼈어요!
          </h3>
          <Hydration state={reviewState}>
            <GatheringReviewList gatheringId={Number(params.id)} />
          </Hydration>
        </div>
      </div>
    </MainContainer>
  );
}
