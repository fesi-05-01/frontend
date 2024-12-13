import { render, screen } from '@testing-library/react';

import Tag from '~/src/components/common/tag';

describe('Tag 컴포넌트', () => {
  // 이렇게 구체적인 클래스명 말고 다른 구분 방법 찾아보기
  it('small 사이즈로 렌더링되어야 함', () => {
    render(<Tag size="small">테스트</Tag>);

    const tag = screen.getByText('테스트');
    expect(tag).toHaveClass('pr-4');
    expect(tag).toHaveClass('rounded-tr-[22px]');
  });

  it('large 사이즈로 렌더링되어야 함', () => {
    render(<Tag size="large">테스트</Tag>);

    const tag = screen.getByText('테스트');
    expect(tag).toHaveClass('pr-2.5');
  });

  it('children이 렌더링되어야 함', () => {
    render(<Tag size="small">테스트 텍스트</Tag>);
    expect(screen.getByText('테스트 텍스트')).toBeInTheDocument();
  });
});
