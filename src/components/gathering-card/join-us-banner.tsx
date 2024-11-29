import { type ComponentPropsWithoutRef } from 'react';
import Image from 'next/image';

import HeadClassImage from '~/src/assets/images/head-class.png';
import { cn } from '~/src/utils/class-name';

interface JoinUsBannerProps extends ComponentPropsWithoutRef<'div'> {
  className?: string;
}

export default function JoinUsBanner({ className }: JoinUsBannerProps) {
  return (
    <div className={cn(`mb-8 mt-10 flex gap-4`, className)}>
      <Image src={HeadClassImage} alt="head" width={72} height={72} />
      <div className="flex flex-col gap-2">
        <p className="text-sm font-medium text-gray-700">
          함께 할 사람이 없나요?
        </p>
        <p className="text-2xl font-semibold text-gray-900">
          지금 모임에 참여해보세요
        </p>
      </div>
    </div>
  );
}
