import { render, screen } from '@testing-library/react';

import ChipInfo from '~/src/components/common/chip-info';

describe('ChipInfo 컴포넌트', () => {
  it('date 타입일 때 흰색 텍스트로 렌더링되어야 함', () => {
    render(<ChipInfo type="date">2024.03.15</ChipInfo>);

    const chip = screen.getByText('2024.03.15');
    expect(chip).toHaveClass('text-white');
  });

  it('time 타입일 때 주황색 텍스트로 렌더링되어야 함', () => {
    render(<ChipInfo type="time">14:00</ChipInfo>);

    const chip = screen.getByText('14:00');
    expect(chip).toHaveClass('text-orange-600');
  });

  it('추가 className이 적용되어야 함', () => {
    const customClass = 'custom-class';
    render(
      <ChipInfo type="date" className={customClass}>
        2024.03.15
      </ChipInfo>,
    );

    const chip = screen.getByText('2024.03.15');
    expect(chip).toHaveClass(customClass);
  });

  it('children이 올바르게 렌더링되어야 함', () => {
    const testContent = '테스트 내용';
    render(<ChipInfo type="date">{testContent}</ChipInfo>);

    expect(screen.getByText(testContent)).toBeInTheDocument();
  });
});
