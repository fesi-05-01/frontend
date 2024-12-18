import { fireEvent, render, screen, waitFor } from '@testing-library/react';

import SignupForm from '~/src/components/authpage/signup-form';
import { useSignup } from '~/src/services/auths/use-signup';

jest.mock('~/src/services/auths/use-signup');

jest.mock('~/src/services/auths/use-signup', () => ({
  useSignup: jest.fn(() => ({
    mutate: jest.fn(),
    isPending: false,
  })),
}));

const renderSignupForm = () => render(<SignupForm />);
screen.debug();

const getNameInput = () => screen.getByPlaceholderText(/이름을 입력해주세요/);
const getEmailInput = () =>
  screen.getByPlaceholderText(/이메일을 입력해주세요/);
const getCompanyNameInput = () =>
  screen.getByPlaceholderText(/회사명을 입력해주세요/);
const getPasswordInput = () =>
  screen.getByPlaceholderText(/비밀번호를 입력해주세요/);
const getConfirmPasswordInput = () =>
  screen.getByPlaceholderText(/비밀번호를 다시 한 번 입력해주세요/);

const getSignupButton = () => screen.getByRole('button', { name: /확인/ });

describe('회원가입 폼', () => {
  test('회원가입 폼 렌더링', () => {
    renderSignupForm();

    expect(getNameInput()).toBeInTheDocument();
    expect(getEmailInput()).toBeInTheDocument();
    expect(getCompanyNameInput()).toBeInTheDocument();
    expect(getPasswordInput()).toBeInTheDocument();
    expect(getConfirmPasswordInput()).toBeInTheDocument();

    expect(getSignupButton()).toBeInTheDocument();
  });

  test('모든 필드 유효성 통과 useSignup 호출 테스트', async () => {
    const mockMutate = jest.fn();
    const mockUseSignup = jest.fn(() => ({
      mutate: mockMutate,
      isPending: false,
    }));

    (useSignup as jest.Mock).mockReturnValue(mockUseSignup());

    renderSignupForm();
    const nameInput = getNameInput();
    const emailInput = getEmailInput();
    const companyNameInput = getCompanyNameInput();
    const passwordInput = getPasswordInput();
    const confirmPasswordInput = getConfirmPasswordInput();
    const signupButton = getSignupButton();

    fireEvent.change(nameInput, { target: { value: '이름' } });
    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(companyNameInput, { target: { value: '회사' } });
    fireEvent.change(passwordInput, { target: { value: 'test1234*' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test1234*' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(mockMutate).toHaveBeenCalledWith({
        email: 'test@test.com',
        password: 'test1234*',
        name: '이름',
        companyName: '회사',
        confirmPassword: 'test1234*',
      });
    });
  });

  test('isPending 테스트', async () => {
    const mockUseSignup = jest.fn().mockReturnValue({
      mutate: jest.fn(),
      isPending: true,
    });

    (useSignup as jest.Mock).mockReturnValue(mockUseSignup());

    renderSignupForm();

    const signupButton = getSignupButton();

    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(signupButton).toBeDisabled();
    });
  });

  test('이름 입력 테스트', async () => {
    renderSignupForm();

    const nameInput = getNameInput();
    fireEvent.change(nameInput, { target: { value: '' } });

    const signupButton = getSignupButton();
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(screen.queryByText(/이름을 입력해주세요/)).toBeInTheDocument();
    });
  });
  test('이름 형식 테스트', async () => {
    renderSignupForm();

    const nameInput = getNameInput();
    fireEvent.change(nameInput, { target: { value: '가' } });

    const signupButton = getSignupButton();
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(
        screen.queryByText(/이름은 2글자 이상이어야 합니다/),
      ).toBeInTheDocument();
    });
  });
  test('이메일 입력 테스트', async () => {
    renderSignupForm();

    const emailInput = getEmailInput();
    const signupButton = getSignupButton();

    // 잘못된 이메일 형식 입력
    fireEvent.change(emailInput, { target: { value: '' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/이메일을 입력해주세요/)).toBeInTheDocument();
    });
  });
  test('잘못된 이메일 형식 테스트', async () => {
    renderSignupForm();

    const emailInput = getEmailInput();
    const signupButton = getSignupButton();

    // 잘못된 이메일 형식 입력
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/이메일 형식이 아닙니다/)).toBeInTheDocument();
    });
  });
  test('회사 입력 테스트', async () => {
    renderSignupForm();

    const companyNameInput = getCompanyNameInput();
    const signupButton = getSignupButton();

    fireEvent.change(companyNameInput, { target: { value: '' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/회사명을 입력해주세요/)).toBeInTheDocument();
    });
  });
  test('회사 입력 테스트', async () => {
    renderSignupForm();

    const companyNameInput = getCompanyNameInput();
    const signupButton = getSignupButton();

    fireEvent.change(companyNameInput, { target: { value: '화' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(
        screen.getByText(/회사명을 정확히 입력해주세요/),
      ).toBeInTheDocument();
    });
  });
  test('비밀번호 입력 테스트', async () => {
    renderSignupForm();

    const passwordInput = getPasswordInput();
    const signupButton = getSignupButton();

    fireEvent.change(passwordInput, { target: { value: '' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(screen.getByText(/비밀번호를 입력해주세요/)).toBeInTheDocument();
    });
  });
  test('비밀번호 8자 이상 입력 안내 테스트', async () => {
    renderSignupForm();

    const passwordInput = getPasswordInput();
    const signupButton = getSignupButton();

    fireEvent.change(passwordInput, { target: { value: 'test' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(
        screen.getByText(/비밀번호는 8자리 이상이어야 합니다/),
      ).toBeInTheDocument();
    });
  });
  test('비밀번호 확인이 일치하지 않을 경우 ', async () => {
    renderSignupForm();

    const passwordInput = getPasswordInput();
    const confirmPasswordInput = getConfirmPasswordInput();
    const signupButton = getSignupButton();

    fireEvent.change(passwordInput, { target: { value: 'test1234*' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'test1234' } });
    fireEvent.submit(signupButton);

    await waitFor(() => {
      expect(
        screen.getByText(/비밀번호가 일치하지 않습니다/),
      ).toBeInTheDocument();
    });
  });
});
