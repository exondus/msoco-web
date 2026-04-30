import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Get in touch with Zakes at Msoco Rockers Production. Book a wedding consultation, request a quote, or discuss your ceremony. Based in Durban, KwaZulu-Natal.',
  openGraph: {
    title: 'Contact Us | Msoco Rockers',
    description: 'Book a wedding consultation or request a quote. Based in Durban, KwaZulu-Natal.',
  },
  alternates: {
    canonical: '/weddings/contact',
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
