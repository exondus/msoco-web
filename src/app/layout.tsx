import type { Metadata } from "next";
import { Montserrat, Playfair_Display, Inter } from "next/font/google";
import ThemeInitializer from "@/components/ThemeInitializer";
import BridgeFAB from "@/components/BridgeFAB";
import WhatsAppFAB from "@/components/ui/WhatsAppFAB";
import ApolloProvider from "@/components/shared/ApolloProvider";
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

export const metadata: Metadata = {
  title: "Msoco Rockers Production",
  description: "Durban-based premium event production, weddings, and corporate solutions.",
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
      <body className="min-h-full font-montserrat relative">
        <PostHogProvider>
          <ApolloProvider>
            <ThemeInitializer />
            <div className="animate-page-fade">
              {children}
            </div>
            <BridgeFAB />
            <WhatsAppFAB />
          </ApolloProvider>
        </PostHogProvider>
      </body>
    </html>
  );
}
