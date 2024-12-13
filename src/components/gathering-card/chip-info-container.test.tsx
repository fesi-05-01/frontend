import { render, screen } from '@testing-library/react';

import ChipInfoContainer from './chip-info-container';

describe('ChipInfoContainer', () => {
  const mockDateTime = '2024-03-20T14:30:00';

  it('날짜와 시간이 올바르게 표시되는지 확인', () => {
    render(<ChipInfoContainer dateTime={mockDateTime} />);

    expect(screen.getByText('3월 20일')).toBeInTheDocument();
    expect(screen.getByText('14:30')).toBeInTheDocument();
  });

  it('추가 className이 적용되는지 확인', () => {
    const customClassName = 'custom-class';
    const { container } = render(
      <ChipInfoContainer dateTime={mockDateTime} className={customClassName} />,
    );

    expect(container.firstChild).toHaveClass('flex gap-2', customClassName);
  });

  it('날짜와 시간 칩이 올바르게 렌더링되는지 확인', () => {
    render(<ChipInfoContainer dateTime={mockDateTime} />);

    const dateChip = screen.getByText('3월 20일');
    const timeChip = screen.getByText('14:30');

    expect(dateChip).toHaveClass('text-white');
    expect(timeChip).toHaveClass('text-orange-600');
  });
});
