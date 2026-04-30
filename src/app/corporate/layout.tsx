import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Corporate Production',
  description: 'Professional corporate event production in Durban. Conference coverage, product launches, brand content, live streaming, and corporate videography by Msoco Rockers.',
  openGraph: {
    title: 'Corporate Production | Msoco Rockers',
    description: 'Professional corporate event production in Durban. Conference coverage, product launches, and brand content.',
  },
  alternates: {
    canonical: '/corporate',
  },
};

export default function CorporateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
