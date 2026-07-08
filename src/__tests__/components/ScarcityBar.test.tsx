import React from 'react';
import { render, screen } from '@testing-library/react';
import ScarcityBar from '@/components/weddings/ScarcityBar';

// Mutable mock so individual tests can toggle the banner on/off.
const mockConfig = {
  active: true,
  years: 27,
  offer: 'Save R6,000 on the Platinum Package',
  deadline: '2026-08-31T23:59:59',
  ctaHref: '/weddings/contact',
};

jest.mock('@/lib/banner-config', () => ({
  get BANNER_CONFIG() {
    return mockConfig;
  },
}));

describe('ScarcityBar', () => {
  describe('anniversary banner (active)', () => {
    beforeAll(() => {
      mockConfig.active = true;
    });

    it('renders the anniversary milestone and offer', () => {
      render(<ScarcityBar remainingDates={4} year={2026} />);
      expect(screen.getByText('27')).toBeInTheDocument();
      expect(screen.getByText(/Save R6,000 on the Platinum Package/i)).toBeInTheDocument();
    });

    it('renders a Book Now CTA pointing to the contact page', () => {
      render(<ScarcityBar remainingDates={4} year={2026} />);
      const link = screen.getByRole('link', { name: /book/i });
      expect(link).toHaveAttribute('href', '/weddings/contact');
    });
  });

  describe('dates-remaining fallback (inactive)', () => {
    beforeAll(() => {
      mockConfig.active = false;
    });

    afterAll(() => {
      mockConfig.active = true;
    });

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
});
