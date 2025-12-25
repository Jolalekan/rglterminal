import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ToastProvider from "./hooks/toast-provider";
import "leaflet/dist/leaflet.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://rglterminal.com"), 
  title: {
    default: "Rolling Grazing Bonded Terminal - Logistics & Shipping Solutions in Nigeria",
    template: "%s | Rolling Grazing Bonded Terminal"
  },
  description: "Leading bonded terminal and logistics company in Nigeria. We offer warehousing, container storage, maritime shipping, and freight forwarding services. 15+ years of excellence.",
  keywords: [
    "bonded terminal Nigeria",
    "logistics Lagos",
    "container storage",
    "maritime shipping",
    "warehousing services",
    "freight forwarding",
    "customs clearance",
    "Badagry terminal",
    "cargo handling Nigeria",
    "shipping solutions"
  ],
  authors: [{ name: "Rolling Grazing Bonded Terminal" }],
  creator: "Rolling Grazing Bonded Terminal",
  publisher: "Rolling Grazing Bonded Terminal",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://rglterminal.com",
    title: "Rolling Grazing Bonded Terminal - Logistics & Shipping Solutions",
    description: "Leading bonded terminal and logistics company in Nigeria. 15+ years of excellence in warehousing, container storage, and maritime shipping.",
    siteName: "Rolling Grazing Bonded Terminal",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rolling Grazing Bonded Terminal"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Rolling Grazing Bonded Terminal - Logistics Solutions",
    description: "Leading bonded terminal and logistics company in Nigeria",
    images: ["/twitter-image.jpg"], // Create this image (1200x600px)
    creator: "@rglterminal" // Replace with actual Twitter handle
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
    google: "your-google-verification-code", 
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

   const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Rolling Grazing Bonded Terminal",
    description: "Leading bonded terminal and logistics company in Nigeria",
    url: "https://rglterminal.com",
    logo: "https://rglterminal.com/logo.png",
    image: "https://rglterminal.com/og-image.jpg",
    telephone: "+234 906 600 5911",
    email: "info@rglterminal.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "klm 26, Opp. Foreign Affair Academy, Lagos/ Badagry Expressway,",
      addressLocality: "Ayetoro/ Ijanikin",
      addressRegion: "Lagos State, Nigeria",
      addressCountry: "NG",
    },
    sameAs: [
      "https://facebook.com/rglterminal",
      "https://twitter.com/rglterminal",
      "https://instagram.com/rglterminal",
    ],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "500"
    }
  }

  return (
    <html lang="en">
       <head>
        <link rel="icon" href="logo1.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="canonical" href="https://rglterminal.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >  
        <ToastProvider/>
        {children}
      </body>
    </html>
  );
}
