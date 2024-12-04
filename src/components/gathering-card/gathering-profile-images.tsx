'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import DefaultProfileImage from '~/src/assets/images/profile-large.png';
import useGatheringParticipants from '~/src/services/gatherings/use-gathering-participants';

interface Props {
  participantCount: number;
}
export default function GatheringProfileImages({ participantCount }: Props) {
  const {
    data,
    isLoading,
    isError,
    error,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
  } = useGatheringParticipants(1112);

  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    if (!data?.pages) return;

    // 전체 데이터를 평탄화(flatten) 후 이미지 필터링
    const participants = data.pages.flatMap((page) => page);
    const validImages = participants
      .map((participant) => participant.User.image)
      .filter((image): image is string => image !== null);

    setImages(validImages);

    if (validImages.length < 4 && hasNextPage && !isFetchingNextPage) {
      fetchNextPage();
    }
  }, [data?.pages, hasNextPage, isFetchingNextPage, fetchNextPage]);

  if (isLoading) return <div>프로필 이미지 로딩중</div>;
  if (isError) {
    console.error('Error fetching gathering details:', error);
    return <div>프로필 이미지 로드 에러</div>;
  }

  const maxImages = 4;
  const displayedImages = images.slice(0, maxImages);

  const defaultImageCount = maxImages - displayedImages.length;
  const finalImages = [
    ...displayedImages,
    ...Array(defaultImageCount).fill(DefaultProfileImage.src),
  ];

  const remainingCount = Math.max(0, participantCount - 4);

  return (
    <div className="flex items-center">
      {finalImages.map((src, index) => (
        <div
          key={index}
          className={`relative -ml-2 ${index === 0 ? 'ml-0' : ''}`}
        >
          <Image
            key={index}
            src={src}
            alt={`Profile Image ${index + 1}`}
            width={29}
            height={29}
            className="rounded-full"
            style={{ aspectRatio: '1' }}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="z-0 -ml-2 flex h-[29px] w-[29px] items-center justify-center rounded-full bg-gray-100 text-sm font-semibold">
          +{remainingCount}
        </div>
      )}
    </div>
  );
}
