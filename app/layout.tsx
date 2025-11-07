import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { FavoritesProvider } from "@/hooks/useFavorites";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://darwin-events.com"), // Update with your actual domain
  title: {
    default: "Darwin Events & Lifestyle Hub | Discover Events in Darwin",
    template: "%s | Darwin Events",
  },
  description:
    "Find the best events, markets, and lifestyle experiences in Darwin, Northern Territory. Discover music festivals, food markets, outdoor activities, arts exhibitions, and more. Your guide to what's happening in Darwin.",
  keywords: [
    "Darwin events",
    "Darwin markets",
    "events Darwin",
    "Darwin festivals",
    "Northern Territory events",
    "Darwin lifestyle",
    "Mindil Beach markets",
    "Darwin music events",
    "Darwin food festivals",
    "things to do Darwin",
  ],
  authors: [{ name: "Darwin Events Hub" }],
  creator: "Darwin Events & Lifestyle Hub",
  publisher: "Darwin Events & Lifestyle Hub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://darwin-events.com",
    siteName: "Darwin Events & Lifestyle Hub",
    title: "Darwin Events & Lifestyle Hub | Discover Events in Darwin",
    description:
      "Find the best events, markets, and lifestyle experiences in Darwin, Northern Territory.",
    images: [
      {
        url: "/og-image.jpg", // Add your OG image
        width: 1200,
        height: 630,
        alt: "Darwin Events & Lifestyle Hub",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Darwin Events & Lifestyle Hub",
    description:
      "Find the best events, markets, and lifestyle experiences in Darwin, Northern Territory.",
    images: ["/og-image.jpg"],
    creator: "@darwinevents", // Update with your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://darwin-events.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${inter.variable} font-sans antialiased`}
      >
        <FavoritesProvider>
          {children}
          <Toaster />
        </FavoritesProvider>
      </body>
    </html>
  );
}
