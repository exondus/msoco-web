import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Inter } from "next/font/google";
import ThemeInitializer from "@/components/ThemeInitializer";
import BridgeFAB from "@/components/BridgeFAB";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import { DiscountProvider } from "@/lib/discount-context";
import { PostHogProvider } from "@/providers/PostHogProvider";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.msocorockers.co.za';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Msoco Rockers Production | Durban Wedding & Event Production',
    template: '%s | Msoco Rockers Production',
  },
  description: "KwaZulu-Natal's premier wedding and corporate production house. 10+ years of cinematic videography, photography, and full-service event production in Durban.",
  keywords: ['wedding photography durban', 'wedding videography kzn', 'umembeso photographer', 'corporate event production durban', 'msoco rockers', 'kwazulu-natal wedding production'],
  authors: [{ name: 'Msoco Rockers Production' }],
  openGraph: {
    type: 'website',
    locale: 'en_ZA',
    url: siteUrl,
    siteName: 'Msoco Rockers Production',
    title: 'Msoco Rockers Production | Durban Wedding & Event Production',
    description: "KwaZulu-Natal's premier wedding and corporate production house. Cinematic videography, photography, and full-service event production.",
    images: [
      {
        url: '/logo.png',
        width: 1200,
        height: 630,
        alt: 'Msoco Rockers Production — Durban Wedding & Event Production',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Msoco Rockers Production',
    description: "KwaZulu-Natal's premier wedding and corporate production house.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${playfair.variable} ${inter.variable} h-full antialiased scroll-smooth`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'LocalBusiness',
              name: 'Msoco Rockers Production',
              description: "KwaZulu-Natal's premier wedding and corporate production house.",
              url: siteUrl,
              telephone: '+27725959977',
              email: 'info@msocorockers.co.za',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Durban',
                addressRegion: 'KwaZulu-Natal',
                addressCountry: 'ZA',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -29.8587,
                longitude: 31.0218,
              },
              areaServed: {
                '@type': 'State',
                name: 'KwaZulu-Natal',
              },
              priceRange: 'R12,500 - R55,000+',
              image: `${siteUrl}/logo.png`,
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className="min-h-full font-montserrat relative">
        <PostHogProvider>
          <DiscountProvider>
            <ThemeInitializer />
            <div className="animate-page-fade">
              {children}
            </div>
            <BridgeFAB />
            <WhatsAppFAB />
          </DiscountProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
