import Image from 'next/image';

import Tag from '~/src/components/common/tag';

interface GatheringDetailImageProps {
  image: string;
}

export default function GatheringDetailImage({
  image,
}: GatheringDetailImageProps) {
  return (
    <div className="relative border border-gray-200">
      <Tag size="small" className="absolute right-0 top-0 z-[1]">
        {'오늘 21시 마감'}
      </Tag>
      <Image src={image} alt="gathering image" fill className="rounded-3xl" />
    </div>
  );
}
