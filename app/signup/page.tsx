import Link from 'next/link';

import {
  Card,
  CardContent,
  CardFooter,
  CardTitle,
} from '~/src/components/authpage/auth-formcard';
import AuthPageBg from '~/src/components/authpage/authpage-bg';
import SignupForm from '~/src/components/authpage/signup-form';
import MainContainer from '~/src/components/layout/main-container';

export default function SignupPage() {
  return (
    <MainContainer className="bg-transparent">
      <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
        <div className="w-full md:w-1/2">
          <AuthPageBg />
        </div>
        <div className="w-full md:w-1/2">
          <Card>
            <CardTitle>회원가입</CardTitle>
            <CardContent>
              <SignupForm />
            </CardContent>
            <CardFooter>
              <p>
                이미 회원이신가요 ?{' '}
                <Link className="text-primary-600 underline" href="/login">
                  로그인
                </Link>
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </MainContainer>
  );
}
