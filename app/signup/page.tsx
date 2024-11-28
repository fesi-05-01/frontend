import Link from 'next/link';

import {
  AuthCard,
  AuthCardContent,
  AuthCardFooter,
  AuthCardTitle,
} from '~/src/components/authpage/auth-formcard';
import AuthPageBg from '~/src/components/authpage/authpage-bg';
import SignupForm from '~/src/components/authpage/signup-form';
import MainContainer from '~/src/components/layout/main-container';

export default function SignupPage() {
  return (
    <MainContainer className="flex items-center justify-center bg-transparent desktop:px-0">
      <div className="flex flex-col items-center justify-between tablet:flex-row">
        <div className="w-full tablet:w-1/2">
          <AuthPageBg />
        </div>
        <div className="w-full tablet:w-1/2">
          <AuthCard>
            <AuthCardTitle>회원가입</AuthCardTitle>
            <AuthCardContent>
              <SignupForm />
            </AuthCardContent>
            <AuthCardFooter>
              <p>
                이미 회원이신가요 ?{' '}
                <Link className="text-primary-600 underline" href="/login">
                  로그인
                </Link>
              </p>
            </AuthCardFooter>
          </AuthCard>
        </div>
      </div>
    </MainContainer>
  );
}
