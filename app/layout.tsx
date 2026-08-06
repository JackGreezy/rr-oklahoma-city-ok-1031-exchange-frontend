import type { Metadata } from "next";
import { Bebas_Neue, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import StickyCall from "@/components/StickyCall";
import { PHONE_NUMBER, SITE_NAME, SITE_URL } from "@/lib/config";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bebas",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      { url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      { rel: "android-chrome-192x192", url: "/favicon/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { rel: "android-chrome-512x512", url: "/favicon/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/favicon/site.webmanifest",
  openGraph: {
    title: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
    description:
      "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
    description: "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
  },

  alternates: { canonical: "/" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${bebasNeue.variable} font-body antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <StickyCall phone={PHONE_NUMBER} />
        <Analytics />
              <script src="/turnstile-contact.js" defer></script>
      </body>
    </html>
  );
}
