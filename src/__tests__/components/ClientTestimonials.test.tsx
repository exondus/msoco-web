import { render, screen } from '@testing-library/react';
import ClientTestimonials from '@/components/corporate/ClientTestimonials';

describe('ClientTestimonials', () => {
  it('renders three testimonial cards', () => {
    render(<ClientTestimonials />);
    expect(screen.getAllByRole('blockquote')).toHaveLength(3);
  });

  it('renders client name and title', () => {
    render(<ClientTestimonials />);
    expect(screen.getByText(/Events Manager/i)).toBeInTheDocument();
  });

  it('renders metric outcomes', () => {
    render(<ClientTestimonials />);
    expect(screen.getAllByText(/attendees|viewers|satisfaction/i).length).toBeGreaterThan(0);
  });
});
