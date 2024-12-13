import { render, screen } from '@testing-library/react';

import ClosedButton from '~/src/components/gathering-card/closed-button';

describe('ClosedButton', () => {
  it('버튼이 올바르게 렌더링되어야 합니다', () => {
    render(<ClosedButton />);

    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Closed');
  });
});
