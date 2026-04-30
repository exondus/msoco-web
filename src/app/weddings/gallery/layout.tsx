import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Gallery',
  description: 'Portfolio of wedding photography and videography from ceremonies across KwaZulu-Natal. Umembeso, white weddings, and traditional celebrations captured by Msoco Rockers.',
  openGraph: {
    title: 'Wedding Gallery | Msoco Rockers',
    description: 'Portfolio of wedding photography from ceremonies across KwaZulu-Natal.',
  },
  alternates: {
    canonical: '/weddings/gallery',
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
