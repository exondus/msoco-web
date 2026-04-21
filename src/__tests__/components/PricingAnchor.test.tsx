import { render, screen } from '@testing-library/react';
import PricingAnchor from '@/components/weddings/PricingAnchor';

describe('PricingAnchor', () => {
  it('displays starting price', () => {
    render(<PricingAnchor startingPrice="R25,000" premiumPrice="R50,000" />);
    expect(screen.getByText(/R25,000/)).toBeInTheDocument();
  });

  it('displays premium price', () => {
    render(<PricingAnchor startingPrice="R25,000" premiumPrice="R50,000" />);
    expect(screen.getByText(/R50,000/)).toBeInTheDocument();
  });

  it('renders a quote CTA link', () => {
    render(<PricingAnchor startingPrice="R25,000" premiumPrice="R50,000" />);
    expect(screen.getByRole('link', { name: /Explore Tiers & Specifications/i })).toBeInTheDocument();
  });
});
