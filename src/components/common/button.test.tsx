import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '~/src/components/common/button';

describe('Button Component', () => {
  it('기본 테스트', () => {
    render(<Button>버튼</Button>);
    const button = screen.getByRole('button', { name: /버튼/i });

    expect(button).toBeInTheDocument();
    expect(button).toHaveClass(
      'w-full rounded-xl px-3 text-white shadow-sm transition-colors duration-75 hover:shadow-md h-[44px] bg-primary-600',
    );
  });

  it('outlined 테스트', () => {
    render(<Button variant="outlined">버튼</Button>);
    const button = screen.getByRole('button', { name: /버튼/i });

    expect(button).toHaveClass(
      'border border-primary-600 bg-white text-primary-600 hover:border-primary-700 hover:text-primary-700 active:border-primary-800 active:text-primary-800',
    );
  });

  it('비활성화 테스트', () => {
    render(<Button disabled>버튼</Button>);
    const button = screen.getByRole('button', { name: /버튼/i });

    expect(button).toBeDisabled();
    expect(button).toHaveClass('bg-secondary-400 cursor-not-allowed');
  });

  it('children이 렌더링 테스트', () => {
    render(<Button>테스트 버튼</Button>);
    const button = screen.getByRole('button', { name: /테스트 버튼/i });

    expect(button).toHaveTextContent('테스트 버튼');
  });

  it('사용자 정의 클래스 적용 테스트', () => {
    render(<Button className="custom-class">버튼</Button>);
    const button = screen.getByRole('button', { name: /버튼/i });

    expect(button).toHaveClass('custom-class');
  });
});
