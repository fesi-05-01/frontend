import PageTitleWithImage from '~/src/components/common/page-title-with-image';
import CardContainer from '~/src/components/gathering-card/card-container';
import GatheringPanel from '~/src/components/gathering-card/gathering-panel';
import MainContainer from '~/src/components/layout/main-container';
import { get } from '~/src/services/api';
import { gatheringsQueryKeys } from '~/src/services/gatherings/queryKey';
import { type GetGatheringsResponse } from '~/src/services/gatherings/types';
import { Hydration } from '~/src/services/tanstack-query';
import { getDehydratedInfiniteQuery } from '~/src/services/tanstack-query';

export default async function GatheringsPage() {
  const state = await getDehydratedInfiniteQuery({
    queryKey: gatheringsQueryKeys.gatherings({ type: 'DALLAEMFIT' }),
    queryFn: ({ pageParam = 1 }) =>
      get<GetGatheringsResponse>('/gatherings', {
        params: { page: pageParam, limit: 10, type: 'DALLAEMFIT' },
      }),
    initialPageParam: 1,
    staleTime: 5 * 60 * 1000, // 5분
    gcTime: 10 * 60 * 1000, // 10분
  });

  return (
    <MainContainer className="flex flex-col">
      <PageTitleWithImage />
      <div className="flex flex-1 flex-col gap-6">
        <GatheringPanel />
        <Hydration state={state}>
          <CardContainer />
        </Hydration>
      </div>
    </MainContainer>
  );
}
