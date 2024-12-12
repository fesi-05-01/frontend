'use client';

import MainContainer from '~/src/components/layout/main-container';
import DataRenderer from '~/src/components/mypage/data-render';
import ProfileCard from '~/src/components/mypage/profile-card';

export default function MyPage() {
  return (
    <MainContainer>
      <h1 className="mb-6 mt-8 text-2xl font-semibold"> 마이 페이지 </h1>
      <ProfileCard />
      <DataRenderer />
    </MainContainer>
  );
}
