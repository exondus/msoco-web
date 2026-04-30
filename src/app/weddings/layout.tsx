import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Production',
  description: "KwaZulu-Natal's premier wedding photography and videography. Umembeso, white weddings, and 2-day union coverage. 10+ years preserving heritage in Durban.",
  openGraph: {
    title: 'Wedding Production | Msoco Rockers',
    description: "KwaZulu-Natal's premier wedding photography and videography. Umembeso, white weddings, and 2-day union coverage.",
  },
  alternates: {
    canonical: '/weddings',
  },
};

export default function WeddingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
