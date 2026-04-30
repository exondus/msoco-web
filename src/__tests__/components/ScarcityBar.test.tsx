import { render, screen } from '@testing-library/react';
import { DiscountProvider } from '@/lib/discount-context';
import ScarcityBar from '@/components/weddings/ScarcityBar';

const MockedDiscountProvider = ({ children }: { children: React.ReactNode }) => {
  // Mock provider that doesn't fetch from Apollo - just renders children with default discount state
  return <DiscountProvider>{children}</DiscountProvider>;
};

describe('ScarcityBar', () => {
  it('renders the remaining dates count', () => {
    render(
      <MockedDiscountProvider>
        <ScarcityBar remainingDates={4} year={2026} />
      </MockedDiscountProvider>
    );
    expect(screen.getByText(/4 dates remaining/i)).toBeInTheDocument();
    expect(screen.getByText(/2026/i)).toBeInTheDocument();
  });

  it('renders a link to the contact section', () => {
    render(
      <MockedDiscountProvider>
        <ScarcityBar remainingDates={2} year={2026} />
      </MockedDiscountProvider>
    );
    const link = screen.getByRole('link', { name: /secure yours/i });
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('does not render when remainingDates is 0', () => {
    const { container } = render(
      <MockedDiscountProvider>
        <ScarcityBar remainingDates={0} year={2026} />
      </MockedDiscountProvider>
    );
    expect(container.firstChild).toBeNull();
  });
});
