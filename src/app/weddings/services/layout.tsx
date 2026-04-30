import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wedding Services',
  description: 'Full-service wedding production: photography, cinematic videography, live streaming, drone coverage, sound, lighting, and LED projection in KwaZulu-Natal.',
  openGraph: {
    title: 'Wedding Services | Msoco Rockers',
    description: 'Full-service wedding production: photography, videography, live streaming, drone coverage, and more.',
  },
  alternates: {
    canonical: '/weddings/services',
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
