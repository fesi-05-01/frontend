import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '~/src/components/authpage/auth-formcard';
import AuthPageBg from '~/src/components/authpage/authpage-bg';
import LoginForm from '~/src/components/authpage/login-form';
import MainContainer from '~/src/components/layout/main-container';

export default function LoginPage() {
  return (
    <MainContainer className="flex items-center justify-center bg-transparent desktop:px-0">
      <div className="flex flex-col items-center justify-between gap-0 px-0 tablet:flex-row tablet:gap-24 md:flex-row">
        <div className="w-full">
          <AuthPageBg />
        </div>
        <div className="w-full">
          <Card>
            <CardTitle>로그인</CardTitle>
            <CardContent>
              <LoginForm />
            </CardContent>
            <CardFooter>
              <p>
                같이 달램이 처음이신가요 ?{' '}
                <Link className="text-primary-600 underline" href="/signup">
                  회원가입
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainContainer>
  );
}
