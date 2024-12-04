import Image from 'next/image';

import Tag from '~/src/components/common/tag';
import { cn } from '~/src/utils/class-name';

interface GatheringDetailImageProps {
  image: string;
  className?: string;
}

export default function GatheringDetailImage({
  image,
  className,
}: GatheringDetailImageProps) {
  return (
    <div
      className={cn(`relative rounded-3xl border border-gray-200`, className)}
    >
      <Tag size="small" className="absolute right-0 top-0 z-[1]">
        {'오늘 21시 마감'}
      </Tag>
      <Image src={image} alt="gathering image" fill className="rounded-3xl" />
    </div>
  );
}
