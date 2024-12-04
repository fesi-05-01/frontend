'use client';

import GatheringDetailImage from '~/src/components/gathering-card/gathering-detail-image';
import GatheringInfo from '~/src/components/gathering-card/gathering-info';
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

  return (
    <MainContainer>
      <div className="mt-6 grid grid-cols-1 gap-y-4 tablet:grid-cols-2 tablet:gap-x-[14px] tablet:gap-y-[21px] desktop:mt-10 desktop:gap-x-6">
        <GatheringDetailImage
          image={data[0].image}
          className="h-[180px] tablet:h-60"
        />
        <GatheringInfo gathering={data[0]} />
        <div className="h-96 border-t-2 border-gray-200 bg-white tablet:col-span-2">
          Reviews Gathering {params.id} Page 아 여기 페이지네이션 써야 하는데
        </div>
      </div>
    </MainContainer>
  );
}
