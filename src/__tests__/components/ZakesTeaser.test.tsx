import { render, screen } from '@testing-library/react';
import ZakesTeaser from '@/components/shared/ZakesTeaser';

describe('ZakesTeaser', () => {
  it('renders founder attribution', () => {
    render(<ZakesTeaser />);
    expect(screen.getByText(/Zakes/i)).toBeInTheDocument();
  });

  it('renders event count credential', () => {
    render(<ZakesTeaser />);
    expect(screen.getByText(/500\+/)).toBeInTheDocument();
  });

  it('applies corporate border class when persona is corporate', () => {
    const { container } = render(<ZakesTeaser persona="corporate" />);
    expect(container.firstChild).toHaveClass('border-corporate-blue');
  });

  it('applies wedding border class when persona is wedding', () => {
    const { container } = render(<ZakesTeaser persona="wedding" />);
    expect(container.firstChild).toHaveClass('border-wedding-gold');
  });
});
