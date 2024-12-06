import MainContainer from '~/src/components/layout/main-container';
import GroupCard from '~/src/components/mypage/group-card';
import ProfileCard from '~/src/components/mypage/profile-card';
import {
  type GatheringLocation,
  type GatheringType,
} from '~/src/services/types';

export default function MyPage() {
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
      <h1 className="my-6 text-2xl font-semibold"> 마이 페이지 </h1>
      <ProfileCard />

      <div className="border-t-2 border-secondary-900 p-6">
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
