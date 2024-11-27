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
    <MainContainer className="flex-col items-center justify-center bg-transparent px-4 tablet:px-4 md:flex-row desktop:px-4">
      <div className="flex flex-col items-center justify-center gap-10 md:flex-row">
        <div className="w-full p-4">
          <AuthPageBg />
        </div>
        <div className="w-full p-4">
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
