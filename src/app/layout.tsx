import type { Metadata } from "next";
import { Bebas_Neue, Montserrat, Inter } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL || "https://ugrammfitness.com"
  ),
  title: {
    default: "UGRAMM FITNESS | Premium Gym in Bidar, Karnataka",
    template: "%s | UGRAMM FITNESS",
  },
  description:
    "UGRAMM FITNESS — Bidar's most premium gym. Expert personal training, state-of-the-art equipment, and a community that pushes you to your limits. RISE. ROAR. RULE.",
  keywords: [
    "gym bidar",
    "fitness center bidar",
    "ugramm fitness",
    "personal training bidar",
    "best gym bidar karnataka",
    "weight loss bidar",
    "muscle gain bidar",
    "gym membership bidar",
    "crossfit bidar",
    "strength training bidar",
  ],
  authors: [{ name: "UGRAMM FITNESS" }],
  creator: "UGRAMM FITNESS",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://ugrammfitness.com",
    siteName: "UGRAMM FITNESS",
    title: "UGRAMM FITNESS | Premium Gym in Bidar, Karnataka",
    description: "Bidar's most premium fitness destination. Where lions train.",
    images: [
      { url: "/og-image.jpg", width: 1200, height: 630, alt: "UGRAMM FITNESS" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UGRAMM FITNESS | Premium Gym in Bidar",
    description:
      "RISE. ROAR. RULE. — Bidar's premium fitness destination.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  verification: { google: "YOUR_GOOGLE_VERIFICATION_CODE" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#C9A84C",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${montserrat.variable} ${inter.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ExerciseGym",
              name: "UGRAMM FITNESS",
              description:
                "Premium gym in Bidar, Karnataka offering personal training, strength training, cardio, and more.",
              url: "https://ugrammfitness.com",
              telephone: "+91-FILL-NUMBER",
              address: {
                "@type": "PostalAddress",
                streetAddress: "FILL ADDRESS",
                addressLocality: "Bidar",
                addressRegion: "Karnataka",
                postalCode: "585401",
                addressCountry: "IN",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "05:00",
                  closes: "22:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Sunday"],
                  opens: "06:00",
                  closes: "20:00",
                },
              ],
              priceRange: "₹₹",
              sameAs: ["https://instagram.com/ugrammfitness/"],
            }),
          }}
        />
      </head>
      <body className="bg-[#0A0A0A] text-white font-inter overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
