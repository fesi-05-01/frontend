'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import headClass from '~/src/assets/images/head-class.png';
import headReview from '~/src/assets/images/head-review.png';
import headSaved from '~/src/assets/images/head-saved.png';
import { cn } from '~/src/utils/class-name';

const PATHNAME_TO_TITLE = {
  gatherings: {
    title: '지금 모임에 참여해보세요',
    description: '함께 할 사람이 없나요?',
    img: headClass,
    alt: '모임 찾기 타이틀 이미지',
  },
  wishlist: {
    title: '찜한 모임',
    description: '마감되기 전에 지금 바로 참여해보세요 👀',
    img: headSaved,
    alt: '찜한 모임 타이틀 이미지',
  },
  'all-reviews': {
    title: '모든 리뷰',
    description: '같이달램을 이용한 분들은 이렇게 느꼈어요 🫶',
    img: headReview,
    alt: '모든 리뷰 타이틀 이미지',
  },
};

export default function PageTitleWithImage() {
  const pathname = usePathname();
  const matchedPathname = (Object.keys(PATHNAME_TO_TITLE).find((key) =>
    pathname.includes(key),
  ) || 'gatherings') as keyof typeof PATHNAME_TO_TITLE;

  const { title, description, img, alt } = PATHNAME_TO_TITLE[matchedPathname];

  return (
    <div
      className={cn('flex items-center gap-4', 'my-6 tablet:mb-8 tablet:mt-10')}
    >
      <div className="relative size-[72px] shrink-0 overflow-hidden">
        <Image
          src={img.src}
          className="object-cover"
          fill
          sizes="72px"
          alt={alt}
        />
      </div>

      <div
        className={cn(
          'flex flex-col gap-2',
          matchedPathname === 'gatherings' && 'flex-col-reverse',
        )}
      >
        <span className={cn('font-semibold', 'text-lg tablet:text-2xl')}>
          {title}
        </span>
        <span className="text-sm font-medium">{description}</span>
      </div>
    </div>
  );
}
