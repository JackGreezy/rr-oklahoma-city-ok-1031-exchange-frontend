import type { Metadata } from "next";
import HomePageClient from "@/components/home-page-client";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.1031exchangeoklahomacity.com"),
  title: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
  description:
    "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
  openGraph: {
    title: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
    description:
      "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
    url: "https://www.1031exchangeoklahomacity.com/",
    siteName: "1031 Exchange Oklahoma City",
    images: ["/og-image.png"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "1031 Exchange Oklahoma City, OK | Free Exchange Guidance",
    description: "Selling investment or inherited property in Oklahoma City? Get free 1031 exchange guidance and request current replacement property and DST options.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: "https://www.1031exchangeoklahomacity.com/",
  },
};

export default function Page() {
  return <HomePageClient />;
}
