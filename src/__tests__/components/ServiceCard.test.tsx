import { render, screen } from '@testing-library/react';
import ServiceCard from '@/components/corporate/ServiceCard';

const baseProps = {
  title: 'Broadcast Media',
  category: 'Videography',
  specs: ['4K Multi-cam', 'Drone Ops'],
  benefit: 'Your message reaches 10,000 people simultaneously',
  outcome: '4K multi-cam livestream with no venue limits — from Durban to the world.',
};

describe('ServiceCard', () => {
  it('renders the benefit headline', () => {
    render(<ServiceCard {...baseProps} />);
    expect(screen.getByText(/10,000 people/i)).toBeInTheDocument();
  });

  it('renders the outcome sentence', () => {
    render(<ServiceCard {...baseProps} />);
    expect(screen.getByText(/no venue limits/i)).toBeInTheDocument();
  });

  it('renders the specs list', () => {
    render(<ServiceCard {...baseProps} />);
    expect(screen.getByText('4K Multi-cam')).toBeInTheDocument();
    expect(screen.getByText('Drone Ops')).toBeInTheDocument();
  });

  it('renders without benefit/outcome (backward compatible)', () => {
    const { benefit, outcome, ...propsWithout } = baseProps;
    render(<ServiceCard {...propsWithout} />);
    expect(screen.getByText('Broadcast Media')).toBeInTheDocument();
  });
});
