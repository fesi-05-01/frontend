import Link from 'next/link';

import FloatingBar from '~/src/components/layout/floating-bar';
import MainContainer from '~/src/components/layout/main-container';

export default function Home() {
  return (
    <MainContainer>
      <div>1팀 화이팅~</div>
      <Link href="/login"> 로그인 </Link>
      <FloatingBar />
    </MainContainer>
  );
}
