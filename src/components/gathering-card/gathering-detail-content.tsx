'use client';

import Loading from '~/app/loading';
import GatheringDetailImage from '~/src/components/gathering-card/gathering-detail-image';
import GatheringInfo from '~/src/components/gathering-card/gathering-info';
import FloatingBar from '~/src/components/layout/floating-bar';
import useGatheringDetail from '~/src/services/gatherings/use-gathering-detail';

interface Props {
  gatheringId: number;
}

export default function GatheringDetailContent({ gatheringId }: Props) {
  const { data, isLoading, isError } = useGatheringDetail(gatheringId);

  if (isLoading) return <Loading />;
  if (isError) return <div>에러가 발생했습니다.</div>;
  if (!data) return null;

  return (
    <>
      <GatheringDetailImage
        image={data[0].image}
        className="h-[180px] tablet:h-60"
      />
      <GatheringInfo gathering={data[0]} />
      <FloatingBar createdById={data[0].createdBy} />
    </>
  );
}
