import { render, screen } from '@testing-library/react';

import ChipInfo from '~/src/components/common/chip-info';

describe('ChipInfo 컴포넌트', () => {
  it('date 타입일 때 흰색 텍스트로 렌더링되어야 함', () => {
    const date = '3월 15일';
    render(<ChipInfo type="date">{date}</ChipInfo>);

    const chip = screen.getByText(date);
    expect(chip).toHaveClass('text-white');
  });

  it('time 타입일 때 주황색 텍스트로 렌더링되어야 함', () => {
    const time = '14:00';
    render(<ChipInfo type="time">{time}</ChipInfo>);

    const chip = screen.getByText(time);
    expect(chip).toHaveClass('text-orange-600');
  });

  it('추가 className이 적용되어야 함', () => {
    const customClass = 'custom-class';
    render(
      <ChipInfo type="date" className={customClass}>
        3월 15일
      </ChipInfo>,
    );

    const chip = screen.getByText('3월 15일');
    expect(chip).toHaveClass(customClass);
  });
});
