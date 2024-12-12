'use client';

import useBreakpoint from 'use-breakpoint';

import GatheringCardLarge from '~/src/components/gathering-card/gathering-card-large';
import GatheringCardSmall from '~/src/components/gathering-card/gathering-card-small';
import { useWishList } from '~/src/hooks/wishlist/use-wishlist';
import { type Gathering } from '~/src/services/gatherings/types';
import { getBreakpoints } from '~/src/utils/breakpoints';

const BREAKPOINTS = getBreakpoints();

export default function WishlistContainer() {
  const { breakpoint } = useBreakpoint(BREAKPOINTS, 'desktop');
  const { data } = useWishList();
  const flattenedData = data?.flat() ?? [];

  if (!data || flattenedData.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center pb-10">
        <div className="text-center text-sm font-medium text-gray-500">
          아직 찜한 모임이 없어요
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {breakpoint === 'tablet' || breakpoint === 'desktop' ? (
        <div className="flex flex-col gap-6">
          {flattenedData?.map((gathering: Gathering) => (
            <GatheringCardLarge key={gathering.id} gathering={gathering} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center gap-6">
          {flattenedData?.map((gathering: Gathering) => (
            <GatheringCardSmall key={gathering.id} gathering={gathering} />
          ))}
        </div>
      )}
    </div>
  );
}
