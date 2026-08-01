import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.1031exchangeoklahomacity.com"),
  title: "1031 Exchange Oklahoma City | Property Solutions",
  description:
    "Selling Oklahoma City investment real estate? Start the exchange early, compare ownership paths, and request available replacement options.",
  openGraph: {
    title: "1031 Exchange Oklahoma City | Property Solutions",
    description:
      "Selling Oklahoma City investment real estate? Start the exchange early, compare ownership paths, and request available replacement options.",
    url: "https://www.1031exchangeoklahomacity.com/",
    siteName: "1031 Exchange Oklahoma City",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange Oklahoma City | Property Solutions",
    description: "Selling Oklahoma City investment real estate? Start the exchange early, compare ownership paths, and request available replacement options.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.1031exchangeoklahomacity.com/",
  },
};

export default function Page() {
  return <HomePageClient />;
}
