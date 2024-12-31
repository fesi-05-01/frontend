import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { render, screen } from '@testing-library/react';

import GroupCard from '~/src/components/mypage/group-card';
import { type GatheringLocation } from '~/src/services/types';

describe('GroupCard', () => {
  const mockProps = {
    joinedGathering: {
      id: 1,
      name: 'Test Gathering',
      dateTime: new Date().toISOString(),
      participantCount: 5,
      capacity: 10,
      location: 'Test Location' as GatheringLocation,
      isCompleted: false,
      isReviewed: false,
      image: '',
    },
    state: 'default' as const,
  };

  const renderWithQueryClient = (ui: React.ReactElement) => {
    const queryClient = new QueryClient();
    return render(
      <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
    );
  };

  it('renders the group card with correct details', () => {
    renderWithQueryClient(<GroupCard {...mockProps} />);
    expect(screen.getByText('Test Gathering')).toBeInTheDocument();
    expect(screen.getByText('Test Location')).toBeInTheDocument();
  });
});
