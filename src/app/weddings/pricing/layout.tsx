import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Packages & Pricing',
  description: 'Wedding photography and videography packages from R12,500. Heritage, Legacy, and Royale tiers for umembeso, white weddings, and 2-day unions in KwaZulu-Natal.',
  openGraph: {
    title: 'Wedding Packages & Pricing | Msoco Rockers',
    description: 'Wedding photography and videography packages from R12,500. Heritage, Legacy, and Royale tiers.',
  },
  alternates: {
    canonical: '/weddings/pricing',
  },
};

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
