import { isRegistrationEnded } from '~/src/utils/is-registration-ended';

describe('isRegistrationEnded', () => {
  beforeEach(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2024-01-01T00:00:00'));
  });

  afterEach(() => {
    jest.useRealTimers();
  });

  it('마감 기한이 지난 경우 true를 반환해야 함', () => {
    const pastDate = '2023-12-31T23:59:59';
    expect(isRegistrationEnded(pastDate)).toBe(true);
  });

  it('마감 기한이 아직 안 지난 경우 false를 반환해야 함', () => {
    const futureDate = '2024-01-01T00:00:01';
    expect(isRegistrationEnded(futureDate)).toBe(false);
  });

  it('마감 기한이 현재와 정확히 같은 경우 true를 반환해야 함', () => {
    const currentDate = '2024-01-01T00:00:00';
    expect(isRegistrationEnded(currentDate)).toBe(true);
  });
});
