import MainContainer from '~/src/components/layout/main-container';
import GroupCard from '~/src/components/mypage/group-card';

export default function MyPage() {
  return (
    <MainContainer>
      <div>
        {/* <ProfileCard /> */}
        <GroupCard />
      </div>
    </MainContainer>
  );
}
