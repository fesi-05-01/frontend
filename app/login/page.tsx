import Link from 'next/link';

import {
  AuthCard,
  AuthCardContent,
  AuthCardFooter,
  AuthCardTitle,
} from '~/src/components/authpage/auth-formcard';
import AuthPageBg from '~/src/components/authpage/authpage-bg';
import LoginForm from '~/src/components/authpage/login-form';
import MainContainer from '~/src/components/layout/main-container';

export default function LoginPage() {
  return (
    <MainContainer className="flex items-center justify-center bg-transparent desktop:px-0">
      <div className="flex w-full flex-col items-center justify-between tablet:flex-row tablet:gap-24">
        <div className="">
          <AuthPageBg />
        </div>
        <div className="">
          <AuthCard className="w-[510px]">
            <AuthCardTitle>로그인</AuthCardTitle>
            <AuthCardContent>
              <LoginForm />
            </AuthCardContent>
            <AuthCardFooter>
              <p>
                같이 달램이 처음이신가요?{' '}
                <Link className="text-primary-600 underline" href="/signup">
                  회원가입
                </Link>
              </p>
            </AuthCardFooter>
          </AuthCard>
        </div>
      </div>
    </MainContainer>
  );
}
