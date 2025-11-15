import type { Metadata } from "next";
import { SITE_NAME, SITE_URL, OFFICE_ADDRESS } from "@/lib/config";
import Breadcrumbs from "@/components/breadcrumbs";
import ContactForm from "./contact-form";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get started with your 1031 exchange. Contact us to discuss replacement property identification and exchange coordination.",
  alternates: {
    canonical: `${SITE_URL}/contact`,
  },
};

type Props = {
  searchParams: Promise<{ projectType?: string; city?: string }>;
};

export default async function ContactPage({ searchParams }: Props) {
  const params = await searchParams;
  const initialProjectType = params.projectType || "";
  const initialCity = params.city || "";

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12 md:px-8 md:py-16">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <div className="mt-8">
          <h1 className="text-4xl font-semibold text-slate-900 md:text-5xl">Contact Us</h1>
          <p className="mt-4 text-lg text-slate-600">
            Get started with your 1031 exchange. Contact us to discuss replacement property identification and exchange coordination.
          </p>
        </div>

        <div className="mt-12 grid gap-12 lg:grid-cols-2">
          <div>
            <ContactForm initialProjectType={initialProjectType} initialCity={initialCity} />
          </div>

          <div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Location</h2>
              <div className="mt-4 aspect-video w-full overflow-hidden rounded-lg bg-slate-100">
                <iframe
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src={`https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed&zoom=15`}
                  allowFullScreen
                  title={`Map showing ${OFFICE_ADDRESS}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

