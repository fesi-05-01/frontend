import Image from 'next/image';

import profileImage from '~/src/assets/images/profile-small.png';
import Rating from '~/src/components/common/rating';
import { type GetReviewListResponse } from '~/src/services/reviews/types';
import { cn } from '~/src/utils/class-name';

type Props = {
  hasNameTag?: boolean;
} & GetReviewListResponse[0];

export default function ReviewCardItem({ hasNameTag = false, ...data }: Props) {
  return (
    <div className={cn('flex gap-6 pt-6', 'flex-col tablet:flex-row')}>
      {/* 모임 이미지 */}
      <div className="relative h-[156px] w-full shrink-0 overflow-hidden rounded-3xl tablet:max-w-[280px]">
        <Image
          src={data.Gathering.image}
          alt={data.Gathering.name}
          fill
          sizes="770px"
          className="object-cover"
        />
      </div>

      {/* 리뷰 정보 */}
      <div
        className={cn(
          'grow border-b-2 border-dashed border-secondary-200 font-medium',
          'pb-4 tablet:h-[156px] tablet:pb-0',
        )}
      >
        {/* 리뷰 점수 */}
        <Rating value={data.score} />

        {/* 리뷰 내용 */}
        <p className="mt-2.5 text-sm tablet:line-clamp-3">{data.comment}</p>

        {/* 모임 주제 및 장소 */}
        <p className="mt-2.5 space-x-1 text-xs">
          <span>{data.Gathering.name}</span>
          <span>·</span>
          <span>{data.Gathering.location}</span>
        </p>

        {/* 리뷰 작성자 정보 및 날짜 */}
        <div className="mt-2 flex items-center text-xs">
          {hasNameTag && (
            <>
              <div className="relative size-6 overflow-hidden rounded-full">
                <Image
                  src={data.User.image || profileImage}
                  alt={data.User.name}
                  fill
                  sizes="24px"
                  className="object-cover"
                />
              </div>
              <span className="ml-2">{data.User.name}</span>
              <span className="ml-2 mr-3">|</span>
            </>
          )}
          <span className="text-secondary-500">
            {new Date(data.createdAt).toLocaleDateString('ko-KR')}
          </span>
        </div>
      </div>
    </div>
  );
}
