import React from 'react';
import { render, screen } from '@testing-library/react';
import ScarcityBar from '@/components/weddings/ScarcityBar';

// Mock the discount context hook directly to avoid async fetching
jest.mock('@/lib/discount-context', () => ({
  useDiscount: () => ({
    isActive: false,
    loading: false,
    percentage: 0,
    copy: '',
    discountedPrice: (price: number) => price,
  }),
}));

describe('ScarcityBar', () => {
  it('renders the remaining dates count', () => {
    render(<ScarcityBar remainingDates={4} year={2026} />);
    expect(screen.getByText(/4 dates remaining/i)).toBeInTheDocument();
    expect(screen.getByText(/2026/i)).toBeInTheDocument();
  });

  it('renders a link to the contact section', () => {
    render(<ScarcityBar remainingDates={2} year={2026} />);
    const link = screen.getByRole('link', { name: /secure yours/i });
    expect(link).toHaveAttribute('href', '#contact');
  });

  it('does not render when remainingDates is 0', () => {
    const { container } = render(<ScarcityBar remainingDates={0} year={2026} />);
    expect(container.firstChild).toBeNull();
  });
});
