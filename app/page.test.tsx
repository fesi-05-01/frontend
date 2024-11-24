import { render, screen } from '@testing-library/react';

import Home from './page';

describe('Home', () => {
  it('renders', () => {
    render(<Home />);

    expect(screen.getByText('1팀 화이팅~')).toBeInTheDocument();
  });
});
