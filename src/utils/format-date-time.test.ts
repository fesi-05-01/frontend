import formatDateTime from './format-date-time';

describe('formatDateTime', () => {
  it('UTC 날짜와 시간을 한국 날짜 및 시간 형식으로 변환해야 합니다', () => {
    const input = '2024-12-15T12:00:00.000Z';
    const expectedOutput = {
      date: '12월 15일',
      time: '21:00', // 한국 시간으로 변환된 시간
    };

    const result = formatDateTime(input);
    expect(result).toEqual(expectedOutput);
  });

  it('자정 시간을 올바르게 처리해야 합니다', () => {
    const input = '2024-12-15T15:00:00.000Z'; // UTC 15:00은 KST에서 자정
    const expectedOutput = {
      date: '12월 16일', // 날짜가 다음 날로 넘어감
      time: '00:00',
    };

    const result = formatDateTime(input);
    expect(result).toEqual(expectedOutput);
  });

  it('이른 아침 시간을 올바르게 처리해야 합니다', () => {
    const input = '2024-12-15T00:00:00.000Z'; // UTC 00:00은 KST에서 09:00
    const expectedOutput = {
      date: '12월 15일',
      time: '09:00',
    };

    const result = formatDateTime(input);
    expect(result).toEqual(expectedOutput);
  });
});
