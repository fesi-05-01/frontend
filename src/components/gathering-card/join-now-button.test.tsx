import { render, screen } from '@testing-library/react';

import JoinNowButton from '~/src/components/gathering-card/join-now-button';

describe('JoinNowButton', () => {
  it('버튼이 올바르게 렌더링되어야 합니다', () => {
    render(<JoinNowButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('join now');
  });
});
