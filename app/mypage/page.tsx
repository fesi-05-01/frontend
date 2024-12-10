'use client';
import { useState } from 'react';

import MainContainer from '~/src/components/layout/main-container';
import GroupCard from '~/src/components/mypage/group-card';
import ProfileCard from '~/src/components/mypage/profile-card';
import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export default function MyPage() {
  const [activeTab, setActiveTab] = useState<
    'myGroups' | 'myReviews' | 'createdGroups'
  >('myGroups');
  const tabTop = [
    { id: 'myGroups', label: '나의 모임' },
    { id: 'myReviews', label: '나의 리뷰' },
    { id: 'createdGroups', label: '내가 만든 모임' },
  ];
  const [reviewSubTab, setReviewSubTab] = useState<'writable' | 'written'>(
    'writable',
  );
  const tabDown = [
    { id: 'writableReviews', label: '작성 가능한 리뷰' },
    { id: 'writtenReviews', label: '작성한 리뷰' },
  ];
  const mockDataList = [
    {
      id: 1,
      teamId: '1',
      type: 'OFFICE_STRETCHING' as GatheringType,
      name: '챌린지',
      dateTime: '2024-12-10T07:00:00.000Z',
      registrationEnd: '2024-12-09T23:59:59.000Z',
      location: '을지로3가' as GatheringLocation,
      participantCount: 6,
      capacity: 20,
      image: 'img1.jpg',
      createdBy: 10,
      canceledAt: null,
      joinedAt: '2024-12-01T09:00:00.000Z',
      isCompleted: false,
      isReviewed: false,
    },
    {
      id: 2,
      teamId: '2',
      type: 'DALLAEMFIT' as GatheringType,
      name: '요가 클래스',
      dateTime: '2024-12-15T10:00:00.000Z',
      registrationEnd: '2024-12-14T23:59:59.000Z',
      location: '을지로3가' as GatheringLocation,
      participantCount: 12,
      capacity: 15,
      image: 'img2.jpg',
      createdBy: 11,
      canceledAt: null,
      joinedAt: '2024-12-05T11:00:00.000Z',
      isCompleted: false,
      isReviewed: true,
    },
    {
      id: 3,
      teamId: '3',
      type: 'MINDFULNESS' as GatheringType,
      name: '러닝 모임',
      dateTime: '2024-12-20T06:30:00.000Z',
      registrationEnd: '2024-12-19T23:59:59.000Z',
      location: '홍대입구' as GatheringLocation,
      participantCount: 8,
      capacity: 20,
      image: 'img3.jpg',
      createdBy: 12,
      canceledAt: null,
      joinedAt: '2024-12-10T07:30:00.000Z',
      isCompleted: true,
      isReviewed: false,
    },
  ];

  return (
    <MainContainer>
      <h1 className="mb-6 mt-8 text-2xl font-semibold"> 마이 페이지 </h1>
      <ProfileCard />

      <div className="mt-4 border-t-2 border-secondary-900 px-4 py-6 tablet:p-6 desktop:mt-[30px]">
        <div className="flex gap-3 text-lg font-semibold">
          {tabTop.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id as typeof activeTab)}
              className={`relative pb-1 ${
                activeTab === id ? 'text-secondary-900' : 'text-secondary-400'
              }`}
            >
              {label}
              {activeTab === id && (
                <div className="absolute bottom-0 left-0 right-0 h-[2px] rounded-[1px] bg-gray-900" />
              )}
            </button>
          ))}
        </div>
        {activeTab === 'myReviews' && (
          <div className="mt-4 flex gap-2">
            {tabDown.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setReviewSubTab(id as typeof reviewSubTab)}
                className={`rounded-[12px] px-4 py-2 text-sm font-medium ${
                  reviewSubTab === id
                    ? 'bg-secondary-900 text-white'
                    : 'bg-secondary-200 text-secondary-900'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {mockDataList.map((mockdata) => (
          <GroupCard
            key={mockdata.id}
            joinedGathering={mockdata}
            state="default"
          />
        ))}
      </div>
    </MainContainer>
  );
}
