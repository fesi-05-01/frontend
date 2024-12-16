import { act, render, screen } from '@testing-library/react';

import ProgressBar from '~/src/components/common/progress-bar';

jest.mock('~/src/utils/class-name', () => ({
  cn: (...classes: string[]) => classes.join(' '),
}));

describe('ProgressBar 컴포넌트', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    act(() => {
      jest.runOnlyPendingTimers();
    });
    jest.useRealTimers();
  });

  it('기본 렌더링이 되어야 함', () => {
    render(<ProgressBar current={5} capacity={20} />);

    const progressBar = screen.getByRole('progressbar');
    const progressBarFill = screen.getByRole('presentation');

    expect(progressBar).toBeInTheDocument();
    expect(progressBarFill).toBeInTheDocument();
  });

  it('className prop이 적용되어야 함', () => {
    render(<ProgressBar current={5} capacity={20} className="custom-class" />);

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveClass('custom-class');
  });

  it('barClassName prop이 적용되어야 함', () => {
    render(
      <ProgressBar current={5} capacity={20} barClassName="custom-bar-class" />,
    );

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill).toHaveClass('custom-bar-class');
  });

  it('진행률이 100%를 초과하지 않아야 함', () => {
    render(<ProgressBar current={25} capacity={20} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill.style.width).toBe('100%');

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '100');
  });

  it('current나 capacity가 유효하지 않은 경우 0%로 표시되어야 함', () => {
    render(<ProgressBar current={NaN} capacity={20} />);

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill.style.width).toBe('0%');

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('정확한 진행률이 계산되어야 함', () => {
    render(<ProgressBar current={5} capacity={20} />);

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill.style.width).toBe('25%');

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '25');
  });

  it('0% 진행률이 정상적으로 표시되어야 함', () => {
    render(<ProgressBar current={0} capacity={20} />);

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill.style.width).toBe('0%');

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('capacity가 0인 경우 0%로 표시되어야 함', () => {
    render(<ProgressBar current={5} capacity={0} />);

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill.style.width).toBe('0%');

    const progressBar = screen.getByRole('progressbar');
    expect(progressBar).toHaveAttribute('aria-valuenow', '0');
  });

  it('barClassName으로 bg-orange-400이 전달되면 적용되어야 함', () => {
    render(
      <ProgressBar current={5} capacity={20} barClassName="bg-orange-400" />,
    );

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill).toHaveClass('bg-orange-400');
  });

  it('barClassName으로 bg-orange-400이 전달되어도 다른 기본 스타일은 유지되어야 함', () => {
    render(
      <ProgressBar current={5} capacity={20} barClassName="bg-orange-400" />,
    );

    const progressBarFill = screen.getByRole('presentation');
    expect(progressBarFill).toHaveClass(
      'h-1',
      'rounded-md',
      'transition-all',
      'duration-1000',
      'ease-out',
    );
  });
});
