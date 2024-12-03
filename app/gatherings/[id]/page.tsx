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
      <div className="mt-10 grid grid-cols-2 items-stretch gap-x-[24px] gap-y-[14px]">
        <GatheringDetailImage image={data[0].image} />
        <GatheringInfo gathering={data[0]} />
        <div className="col-span-2 mt-[21px]">
          Reviews Gathering {params.id} Page
        </div>
      </div>
    </MainContainer>
  );
}
