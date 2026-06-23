import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { SITE_CONFIG } from "@/config/multan";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} | Professional Home Services in Multan`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Home Services in Multan",
    "AC Repair Multan",
    "Electrician Multan",
    "Plumber Multan",
    "Cleaning Services Multan",
    "Best Home Services Multan",
    "Multan Handyman",
    "Solar Installation Multan"
  ],
  authors: [{ name: "MultanSkill Team" }],
  openGraph: {
    type: "website",
    locale: "en_PK",
    url: SITE_CONFIG.url,
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    siteName: SITE_CONFIG.name,
    images: [{
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: SITE_CONFIG.name
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: [SITE_CONFIG.ogImage],
    creator: "@multanskill"
  },
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL(SITE_CONFIG.url),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": SITE_CONFIG.name,
    "image": SITE_CONFIG.ogImage,
    "@id": SITE_CONFIG.url,
    "url": SITE_CONFIG.url,
    "telephone": SITE_CONFIG.contact.phone,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Bosan Road",
      "addressLocality": "Multan",
      "addressRegion": "Punjab",
      "postalCode": "60000",
      "addressCountry": "PK"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.1575,
      "longitude": 71.5249
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      SITE_CONFIG.links.facebook,
      SITE_CONFIG.links.twitter
    ]
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col font-sans`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
