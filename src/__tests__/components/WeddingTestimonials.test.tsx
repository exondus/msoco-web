import { render, screen } from '@testing-library/react';
import WeddingTestimonials from '@/components/weddings/WeddingTestimonials';

describe('WeddingTestimonials', () => {
  it('renders all three testimonial cards', () => {
    render(<WeddingTestimonials />);
    expect(screen.getAllByRole('blockquote')).toHaveLength(3);
  });

  it('renders client names', () => {
    render(<WeddingTestimonials />);
    expect(screen.getByText(/Lerato & Sipho/i)).toBeInTheDocument();
  });

  it('renders ceremony type badges', () => {
    render(<WeddingTestimonials />);
    expect(screen.getAllByText(/Traditional|White Wedding/i).length).toBeGreaterThan(0);
  });
});
