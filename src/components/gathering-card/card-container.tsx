'use client';

import useBreakpoint from 'use-breakpoint';

import GatheringCardLarge from '~/src/components/gathering-card/gathering-card-large';
import GatheringCardSmall from '~/src/components/gathering-card/gathering-card-small';
import useGatherings from '~/src/services/gatherings/use-gatherings';
import { getBreakpoints } from '~/src/utils/breakpoints';

const BREAKPOINTS = getBreakpoints();

export default function CardContainer() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const { data, isFetching } = useGatherings();
  const flattenedData = data?.flat() ?? [];

  if (!isFetching && (!data || data.length === 0)) {
    return (
      <div className="text-center text-sm font-medium text-gray-500">
        아직 모임이 없어요, <br />
        지금 바로 모임을 만들어보세요!
      </div>
    );
  }

  return (
    <div className="w-full">
      {breakpoint === 'tablet' || breakpoint === 'desktop' ? (
        <div className="flex flex-col gap-6">
          {flattenedData?.map((gathering) => (
            <GatheringCardLarge key={gathering.id} gathering={gathering} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          {flattenedData?.map((gathering) => (
            <GatheringCardSmall key={gathering.id} gathering={gathering} />
          ))}
        </div>
      )}
    </div>
  );
}
