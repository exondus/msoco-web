import { render, screen } from '@testing-library/react';
import CaseStudies from '@/components/corporate/CaseStudies';

describe('CaseStudies', () => {
  it('renders case study cards', () => {
    render(<CaseStudies />);
    expect(screen.getAllByRole('article').length).toBeGreaterThanOrEqual(2);
  });

  it('shows attendee counts', () => {
    render(<CaseStudies />);
    expect(screen.getAllByText(/attendees/i).length).toBeGreaterThan(0);
  });
});
