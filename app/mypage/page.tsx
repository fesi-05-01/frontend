import MainContainer from '~/src/components/layout/main-container';
import GroupCard from '~/src/components/mypage/group-card';
import ProfileCard from '~/src/components/mypage/profile-card';

export default function MyPage() {
  return (
    <MainContainer>
      <h1 className="my-6 text-2xl font-semibold"> 마이 페이지 </h1>
      <ProfileCard />

      <div className="border-t-2 border-secondary-900">
        <GroupCard />
      </div>
    </MainContainer>
  );
}
