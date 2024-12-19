import { render, screen } from '@testing-library/react';
import useBreakpoint from 'use-breakpoint';

import { useGatheringFilter } from '~/src/hooks/gatherings/use-gathering-filter';
import useGatherings from '~/src/services/gatherings/use-gatherings';

import CardContainer from './card-container';

jest.mock('use-breakpoint');
jest.mock('~/src/hooks/gatherings/use-gathering-filter');
jest.mock('~/src/services/gatherings/use-gatherings');

const mockGathering = {
  id: 1,
  type: 'DALLAEMFIT',
  name: '테스트 모임',
  dateTime: '2024-12-31T14:00:00',
  registrationEnd: '2024-12-30T23:59:59',
  location: '건대입구',
  capacity: 20,
  participantCount: 5,
  image: 'https://picsum.photos/400?random=1',
  createdBy: 1,
  canceledAt: null,
};

beforeAll(() => {
  global.IntersectionObserver = class IntersectionObserver
    implements IntersectionObserver
  {
    readonly root: Element | null = null;
    readonly rootMargin: string = '';
    readonly thresholds: ReadonlyArray<number> = [];

    constructor(callback: IntersectionObserverCallback) {
      this.callback = callback;
    }

    private callback: IntersectionObserverCallback;

    disconnect(): void {}
    observe(): void {}
    unobserve(): void {}
    takeRecords(): IntersectionObserverEntry[] {
      return [];
    }
  };
});

describe('CardContainer', () => {
  beforeEach(() => {
    // 기본 모킹 설정
    (useBreakpoint as jest.Mock).mockReturnValue({ breakpoint: 'mobile' });
    (useGatheringFilter as jest.Mock).mockReturnValue({
      type: null,
      location: null,
      date: null,
      sortBy: null,
    });
  });

  it('데이터가 없을 때 안내 메시지를 표시해야 함', () => {
    (useGatherings as jest.Mock).mockReturnValue({
      data: [],
      isFetching: false,
      hasNextPage: false,
    });

    render(<CardContainer />);

    expect(screen.getByText(/아직 모임이 없어요/)).toBeInTheDocument();
    expect(
      screen.getByText(/지금 바로 모임을 만들어보세요!/),
    ).toBeInTheDocument();
  });

  it('로딩 중일 때 Loading 컴포넌트를 표시해야 함', () => {
    (useGatherings as jest.Mock).mockReturnValue({
      data: [mockGathering],
      isFetching: true,
      hasNextPage: false,
    });

    render(<CardContainer />);

    expect(screen.getByRole('status')).toBeInTheDocument();
  });

  it('태블릿/데스크톱에서는 Large 카드를 표시해야 함', () => {
    (useBreakpoint as jest.Mock).mockReturnValue({ breakpoint: 'tablet' });
    (useGatherings as jest.Mock).mockReturnValue({
      data: [[mockGathering]],
      isFetching: false,
      hasNextPage: false,
    });

    render(<CardContainer />);

    expect(screen.getByRole('card-large')).toBeInTheDocument();
  });

  it('모바일에서는 Small 카드를 표시해야 함', () => {
    (useBreakpoint as jest.Mock).mockReturnValue({ breakpoint: 'mobile' });
    (useGatherings as jest.Mock).mockReturnValue({
      data: [[mockGathering]],
      isFetching: false,
      hasNextPage: false,
    });

    render(<CardContainer />);

    expect(screen.getByRole('card-small')).toBeInTheDocument();
  });

  it('무한 스크롤 observer가 설정되어야 함', () => {
    const mockObserve = jest.fn();
    const mockDisconnect = jest.fn();

    // IntersectionObserver 모킹
    window.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: mockObserve,
      disconnect: mockDisconnect,
      unobserve: jest.fn(),
      root: null,
      rootMargin: '',
      thresholds: [],
      takeRecords: jest.fn(),
    }));

    (useGatherings as jest.Mock).mockReturnValue({
      data: [[mockGathering]],
      isFetching: false,
      hasNextPage: true,
      fetchNextPage: jest.fn(),
    });

    render(<CardContainer />);

    expect(mockObserve).toHaveBeenCalled();
  });

  it('취소된 모임은 필터링���어야 함', () => {
    const canceledGathering = { ...mockGathering, canceledAt: new Date() };
    (useGatherings as jest.Mock).mockReturnValue({
      data: [[canceledGathering]],
      isFetching: false,
      hasNextPage: false,
    });

    render(<CardContainer />);

    expect(screen.getByText(/아직 모임이 없어요/)).toBeInTheDocument();
  });
});
