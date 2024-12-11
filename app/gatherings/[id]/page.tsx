'use client';

import GatheringDetailImage from '~/src/components/gathering-card/gathering-detail-image';
import GatheringInfo from '~/src/components/gathering-card/gathering-info';
import GatheringReviewList from '~/src/components/gathering-card/gathering-review-list';
import FloatingBar from '~/src/components/layout/floating-bar';
import MainContainer from '~/src/components/layout/main-container';
import useGatheringDetail from '~/src/services/gatherings/use-gathering-detail';

interface Props {
  params: {
    id: string;
  };
}

export default function GatheringItemPage({ params }: Props) {
  const { data, isLoading, isError, error } = useGatheringDetail(
    Number(params.id),
  );

  if (isLoading) return <MainContainer>Loading...</MainContainer>;
  if (isError || !data || data.length === 0) {
    if (isError) {
      console.error('Error fetching gathering details:', error);
    } else if (!data || data.length === 0) {
      console.error('Data is empty or undefined:', data);
    }
    return <MainContainer>Error loading data</MainContainer>;
  }
  const gathering = data[0];
  return (
    <MainContainer className="flex flex-col">
      <div className="mt-6 grid flex-1 grid-cols-1 grid-rows-[auto_auto_1fr] gap-y-4 tablet:grid-cols-2 tablet:grid-rows-[auto_1fr] tablet:gap-x-[14px] tablet:gap-y-[21px] desktop:mt-10 desktop:gap-x-6">
        <GatheringDetailImage
          image={data[0].image}
          className="h-[180px] tablet:h-60"
        />
        <GatheringInfo gathering={data[0]} />
        <div className="flex flex-col border-t-2 border-gray-200 bg-white p-6 tablet:col-span-2">
          <h3 className="text-lg font-semibold">
            이용자들은 이 프로그램을 이렇게 느꼈어요!
          </h3>
          <GatheringReviewList gatheringId={Number(params.id)} />
        </div>
      </div>
      <FloatingBar createdById={gathering.createdBy} />
    </MainContainer>
  );
}
