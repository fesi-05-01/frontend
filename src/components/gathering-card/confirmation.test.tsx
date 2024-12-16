import { render, screen } from '@testing-library/react';

import Confirmation from '~/src/components/gathering-card/confirmation';

describe('Confirmation', () => {
  it('renders confirmation message', () => {
    render(<Confirmation />);
    expect(screen.getByText('개설확정')).toBeInTheDocument();
  });
});
