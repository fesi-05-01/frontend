import { fireEvent, render, screen } from '@testing-library/react';

import Input from '~/src/components/common/input';

describe('인풋 컴포넌트', () => {
  let toggleButton: HTMLElement;
  let inputElement: HTMLInputElement;
  let errorElement: HTMLElement;
  const errorMessage = '에러에러';

  beforeEach(() => {
    render(
      <Input placeholder="input text" type="password" error={errorMessage} />,
    );
    toggleButton = screen.getByRole('button');
    inputElement = screen.getByPlaceholderText('input text');
    errorElement = screen.getByText(errorMessage);
  });

  test('인풋이 잘 렌더링 되는지', () => {
    expect(inputElement).toBeInTheDocument();
  });

  test('비밀번호 표시/숨기기 테스트', () => {
    expect(inputElement).toHaveAttribute('type', 'password');

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute('type', 'text');

    fireEvent.click(toggleButton);
    expect(inputElement).toHaveAttribute('type', 'password');
  });

  test('에러 메시지 테스트', () => {
    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveClass('text-sm text-red-600');
  });
});
