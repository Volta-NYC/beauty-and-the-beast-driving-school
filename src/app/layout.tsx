import type { Metadata, Viewport } from "next"
import "./globals.css"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  metadataBase: new URL("https://www.porratax.com"),
  title: {
    default: "Beauty & The Beast Driving School / Porrata Tax Services - Bronx, NY",
    template: "%s | Beauty & The Beast Driving School / Porrata Tax Services",
  },
  description: "Professional driving education and tax services in the Bronx. Complete driving packages, individual lessons, defensive driving courses, tax preparation, notary, and more. Two convenient locations.",
  keywords: ["driving school Bronx", "tax services Bronx", "defensive driving NY", "road test scheduling", "notary public Bronx", "tax preparation", "ITIN application"],
  authors: [{ name: "Beauty & The Beast Driving School / Porrata Tax Services" }],
  creator: "Beauty & The Beast Driving School / Porrata Tax Services",
  publisher: "Beauty & The Beast Driving School / Porrata Tax Services",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.porratax.com",
    siteName: "Beauty & The Beast Driving School / Porrata Tax Services",
    title: "Beauty & The Beast Driving School / Porrata Tax Services - Bronx, NY",
    description: "Professional driving education and tax services in the Bronx. Complete driving packages, individual lessons, defensive driving courses, tax preparation, notary, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Beauty & The Beast Driving School / Porrata Tax Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Beauty & The Beast Driving School / Porrata Tax Services",
    description: "Professional driving education and tax services in the Bronx.",
    images: ["/og-image.jpg"],
  },
  verification: {
    google: "google-site-verification-code",
  },
}

export const viewport: Viewport = {
  themeColor: "#f3efe5",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Beauty and The Beast Driving School / Porrata Tax Services",
              description: "Professional driving education and tax services in the Bronx. Complete driving packages, individual lessons, defensive driving courses, tax preparation, notary, and more.",
              url: "https://www.porratax.com",
              telephone: "+1-917-737-7623",
              email: "carmen@porratax.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "909 E. 169th St",
                addressLocality: "Bronx",
                addressRegion: "NY",
                postalCode: "10459",
                addressCountry: "US",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 40.8272,
                longitude: -73.8935,
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "11:00",
                  closes: "17:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Sunday",
                  opens: "00:00",
                  closes: "00:00",
                  description: "By appointment only",
                },
              ],
              priceRange: "$$",
              currenciesAccepted: "USD",
              paymentAccepted: "Cash, Credit Card, Check, Zelle, Venmo",
              areaServed: "Bronx, NY",
              hasMap: "https://maps.google.com/?cid=123456789",
              sameAs: [
                "https://facebook.com/PorrataTaxServices",
                "https://instagram.com/bb_drivingschool",
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
