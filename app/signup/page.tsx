import {
  AuthCard,
  AuthCardContent,
  AuthCardFooter,
  AuthCardTitle,
} from '~/src/components/authpage/auth-formcard';
import AuthPageBg from '~/src/components/authpage/authpage-bg';
import SignupForm from '~/src/components/authpage/signup-form';
import SwitchAuthPage from '~/src/components/authpage/switch-auth-page';
import MainContainer from '~/src/components/layout/main-container';

export default function SignupPage() {
  return (
    <MainContainer className="flex items-center justify-center bg-transparent p-4 desktop:px-0">
      <div className="flex w-full flex-col items-center justify-between desktop:flex-row desktop:gap-36 desktop:p-0">
        <AuthPageBg />
        <AuthCard>
          <AuthCardTitle>회원가입</AuthCardTitle>
          <AuthCardContent>
            <SignupForm />
          </AuthCardContent>
          <AuthCardFooter>
            <p className="text-sm tablet:text-base">
              이미 회원이신가요 ?
              <SwitchAuthPage />
            </p>
          </AuthCardFooter>
        </AuthCard>
      </div>
    </MainContainer>
  );
}
