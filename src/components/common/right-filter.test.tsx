import { fireEvent, render, screen } from '@testing-library/react';

import RightFilter from '~/src/components/common/right-filter';

describe('RightFilter 컴포넌트 테스트', () => {
  const mockOptions = ['Option 1', 'Option 2', 'Option 3'];
  const mockOnOptionSelect = jest.fn();
  const mockOnDateSelect = jest.fn();
  const mockOnDateReset = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('플레이스홀더 텍스트가 제대로 렌더링되는지 확인', () => {
    render(
      <RightFilter
        placeholder="Select an option"
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
      />,
    );

    expect(screen.getByText('Select an option')).toBeInTheDocument();
  });

  it('드롭다운 옵션을 클릭하면 onOptionSelect 콜백이 호출되는지 확인', () => {
    render(
      <RightFilter
        placeholder="Select an option"
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
      />,
    );

    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Option 1'));

    expect(mockOnOptionSelect).toHaveBeenCalledTimes(1);
    expect(mockOnOptionSelect).toHaveBeenCalledWith('Option 1');
  });

  it('캘린더 모드에서 날짜를 선택하면 onDateSelect 콜백이 호출되는지 확인', () => {
    render(
      <RightFilter
        options={mockOptions}
        placeholder="Select a date"
        calendar
        onDateSelect={mockOnDateSelect}
      />,
    );

    fireEvent.click(screen.getByText('Select a date'));

    // 날짜를 선택하는 로직이 별도 구현체에 따라 다르므로 가정된 코드
    const mockDate = new Date(2024, 11, 25); // 2024년 12월 25일
    fireEvent.click(screen.getByText('25')); // 가정: 날짜 버튼이 '25' 텍스트로 렌더링됨

    expect(mockOnDateSelect).toHaveBeenCalledTimes(1);
    expect(mockOnDateSelect).toHaveBeenCalledWith(mockDate);
  });

  it('캘린더 초기화 버튼이 작동하고 onDateReset 콜백이 호출되는지 확인', () => {
    render(
      <RightFilter
        options={mockOptions}
        placeholder="Select a date"
        calendar
        onDateSelect={mockOnDateSelect}
        onDateReset={mockOnDateReset}
      />,
    );

    fireEvent.click(screen.getByText('Select a date'));

    // 초기화 버튼 클릭 가정
    const resetButton = screen.getByText('초기화');
    fireEvent.click(resetButton);

    expect(mockOnDateReset).toHaveBeenCalledTimes(1);
  });

  it('드롭다운 외부 클릭 시 드롭다운이 닫히는지 확인', () => {
    render(
      <RightFilter
        placeholder="Select an option"
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
      />,
    );

    // 드롭다운 열기
    fireEvent.click(screen.getByText('Select an option'));

    // 외부 클릭
    fireEvent.mouseDown(document);

    expect(screen.queryByText('Option 1')).not.toBeInTheDocument();
  });

  it('선택된 옵션이 표시되는지 확인', () => {
    render(
      <RightFilter
        placeholder="Select an option"
        options={mockOptions}
        onOptionSelect={mockOnOptionSelect}
      />,
    );

    fireEvent.click(screen.getByText('Select an option'));
    fireEvent.click(screen.getByText('Option 2'));

    expect(screen.getByText('Option 2')).toBeInTheDocument();
  });
});
