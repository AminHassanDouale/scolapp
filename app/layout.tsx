import "@/src/app/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/components/contexts/theme-provider";
import { inter } from "@/lib/fonts";

import { siteConfig } from "../config/site";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  metadataBase: new URL(siteConfig.url),
  description: siteConfig.description,
  keywords: siteConfig.seo.keywords,
  authors: [
    {
      name: siteConfig.seo.author,
      url: siteConfig.url,
    },
  ],
  creator: siteConfig.seo.author,
  publisher: siteConfig.name,
  applicationName: siteConfig.name,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  colorScheme: "light dark",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    type: "website",
    locale: "fr_DJ",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - ${siteConfig.description}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: siteConfig.links.twitter,
    site: siteConfig.links.twitter,
  },
  icons: {
    icon: [
      { url: "/testlogo.png?v=5", sizes: "100x100", type: "image/png" },
      { url: "/testlogo.png?v=5", sizes: "32x32", type: "image/png" },
      { url: "/testlogo.png?v=5", sizes: "16x16", type: "image/png" },
    ],
    apple: [
      { url: "/tete_logo_1.png?v=5", sizes: "180x180", type: "image/png" },
    ],
    shortcut: "/tete_logo_1.png?v=5",
  },
  manifest: "/site.webmanifest",
  alternates: {
    canonical: siteConfig.url,
    languages: {
      "fr-DJ": siteConfig.url,
      "fr": siteConfig.url + "/fr",
      "en": siteConfig.url + "/en",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Replace with your actual code
    yandex: "your-yandex-verification-code", // Replace with your actual code if needed
    yahoo: "your-yahoo-verification-code", // Replace with your actual code if needed
  },
  category: "education",
  classification: "Education Management System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{ colorScheme: "light" }} className="light">
      <head>
        <meta name="theme-color" content="#2563eb" />
        <meta name="msapplication-TileColor" content="#2563eb" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content={siteConfig.name} />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        
        {/* Bigger favicon using your logo - multiple sizes for better display */}
        <link rel="icon" href="/tete_logo_1.png?v=5" type="image/png" sizes="64x64" />
        <link rel="icon" href="/tete_logo_1.png?v=5" type="image/png" sizes="32x32" />
        <link rel="icon" href="/tete_logo_1.png?v=5" type="image/png" sizes="16x16" />
        <link rel="shortcut icon" href="/tete_logo_1.png?v=5" type="image/png" />
        <link rel="apple-touch-icon" href="/tete_logo_1.png?v=5" sizes="180x180" />
        <link rel="apple-touch-icon-precomposed" href="/tete_logo_1.png?v=5" />
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Microsoft tile for Windows */}
        <meta name="msapplication-TileImage" content="/tete_logo_1.png?v=5" />
        <meta name="msapplication-square70x70logo" content="/tete_logo_1.png?v=5" />
        <meta name="msapplication-square150x150logo" content="/tete_logo_1.png?v=5" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: siteConfig.name,
              description: siteConfig.description,
              applicationCategory: "EducationalApplication",
              operatingSystem: "Web, iOS, Android",
              url: siteConfig.url,
              author: {
                "@type": "Organization",
                name: siteConfig.seo.author,
                url: siteConfig.url,
              },
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "EUR",
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                ratingCount: "250",
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-background antialiased`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}