"use client";

import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { motion } from "framer-motion";
import { ContactFormWrapper } from "@/app/contact/contact-form";
import { locationsData } from "@/data/locations";
import {
  EMAIL,
  PHONE_HREF,
  PHONE_NUMBER,
  SITE_NAME,
  SITE_URL,
} from "@/lib/config";

const situations = [
  {
    title: "Planning to Sell",
    text: "Start before accepting an offer so the exchange team, sale timing, expected equity, debt and replacement criteria can be organized early.",
    href: "/services/exchange-planning-consultation",
  },
  {
    title: "Already Under Contract",
    text: "The qualified intermediary must be engaged before the sale closes. Get the current contract and closing date reviewed now.",
    href: "/services/qualified-intermediary-coordination",
  },
  {
    title: "Selling Inherited Property",
    text: "Clarify basis, ownership, investment use and the goals of every owner before choosing between a taxable sale and an exchange.",
    href: "/services/inherited-property-capital-gains",
  },
  {
    title: "Tired of Managing Rentals",
    text: "Compare another direct property with net-lease and professionally managed DST options that do not require day-to-day landlord work.",
    href: "/services/passive-real-estate-income",
  },
  {
    title: "Searching for Replacement Property",
    text: "Build a focused search around equity, debt, projected income, control, management responsibility and realistic closing probability.",
    href: "/services/replacement-property-identification",
  },
  {
    title: "Buying Before You Sell",
    text: "Explore reverse-exchange structure, financing and titleholder requirements when the right replacement property appears first.",
    href: "/services/reverse-exchange-timeline",
  },
];

const solutions = [
  {
    title: "Complete Exchange Solutions",
    text: "Bring the sale, deadlines, independent qualified intermediary, advisors, financing and replacement search into one organized plan.",
    href: "/services/exchange-planning-consultation",
    image: "/locations/oklahoma-city-ok-1031-exchange.jpg",
  },
  {
    title: "Replacement Property Search",
    text: "Compare Oklahoma and nationwide real estate against a written brief instead of chasing properties that do not fit the exchange.",
    href: "/services/replacement-property-identification",
    image: "/locations/nationwide-1031-exchange.jpg",
  },
  {
    title: "DST and Passive Options",
    text: "Review professionally managed fractional real estate when reducing landlord work is a central goal of the exchange.",
    href: "/services/dst-replacement-properties",
    image: "/inventory/urgent-care-medical-clinic-oklahoma-1031-exchange.jpg",
  },
  {
    title: "Qualified Intermediary Introduction",
    text: "Get connected with an independent qualified intermediary before closing and keep the required document handoffs visible.",
    href: "/services/qualified-intermediary-coordination",
    image: "/locations/edmond-ok-1031-exchange.jpg",
  },
  {
    title: "Inherited Property Guidance",
    text: "Organize ownership, basis questions, qualifying use and co-owner priorities before a sale limits the available paths.",
    href: "/services/inherited-property-capital-gains",
    image: "/locations/norman-ok-1031-exchange.jpg",
  },
  {
    title: "Reverse Exchange Solutions",
    text: "Coordinate the titleholder, qualified intermediary, lender and closing timeline when replacement property must be acquired first.",
    href: "/services/reverse-exchange-timeline",
    image: "/inventory/last-mile-logistics-flex-oklahoma-1031-exchange.jpg",
  },
];

const ownershipPaths = [
  {
    title: "Direct Real Estate",
    text: "Maintain control over leasing, financing, improvements and disposition while continuing to manage the property directly or through a manager.",
    href: "/property-types/commercial",
  },
  {
    title: "Net-Lease Property",
    text: "Own a specific property with lease-defined tenant responsibilities while evaluating tenant credit, lease terms and future reletting risk.",
    href: "/property-types/triple-net-nnn",
  },
  {
    title: "DST Interest",
    text: "Exchange into professionally managed fractional real estate with less personal management, reduced control and important sponsor, fee and liquidity considerations.",
    href: "/services/dst-replacement-properties",
  },
];

const guides = [
  {
    title: "1031 Exchange Owner's Guide",
    text: "Organize the sale facts, advisor questions, replacement criteria and exchange calendar before the transaction begins.",
    href: "/contact?request=guide",
    label: "Get the free guide",
  },
  {
    title: "Selling Inherited Investment Property",
    text: "Understand which ownership, basis and use questions should be answered before deciding whether an exchange fits.",
    href: "/services/inherited-property-capital-gains",
    label: "Read the guide",
  },
  {
    title: "Direct Property or Passive DST?",
    text: "Compare control, management, financing, liquidity and concentration before selecting the next ownership path.",
    href: "/services/dst-replacement-properties",
    label: "Compare the options",
  },
];

const faqs = [
  {
    question: "When should an Oklahoma City owner start planning a 1031 exchange?",
    answer:
      "Start before the relinquished property closes, and preferably before accepting an offer. The independent qualified intermediary must be engaged before closing, and early planning leaves more time to clarify equity, debt, replacement criteria and financing.",
  },
  {
    question: "Can you help someone who has never completed a 1031 exchange?",
    answer:
      "Yes. The first conversation can begin with the property being sold, the expected closing date and what the owner wants from the next investment. From there, the required professionals and replacement-property work can be organized around one plan.",
  },
  {
    question: "Can a 1031 exchange reduce day-to-day property management?",
    answer:
      "Potentially. An owner can compare another directly owned property with net-lease real estate and professionally managed DST interests. Each path has different levels of control, workload, fees, risk and liquidity.",
  },
  {
    question: "What is a DST replacement property?",
    answer:
      "A Delaware Statutory Trust can hold institutional-quality real estate and may qualify as replacement property for eligible investors. The sponsor manages the property, but the investor gives up direct control and must evaluate the offering documents, fees, leverage, property risk, illiquidity and suitability.",
  },
  {
    question: "How much is needed for a DST investment?",
    answer:
      "Some current offerings may begin around $100,000, but minimums, availability, projected income, leverage and eligibility vary. A current property list is the best way to see what may fit a specific exchange.",
  },
  {
    question: "Can inherited investment property be used in a 1031 exchange?",
    answer:
      "It may qualify when it is held for investment or productive business use, but inherited-property decisions often require basis, estate, ownership and co-owner questions to be reviewed with the appropriate tax and legal professionals first.",
  },
];

export default function HomePageClient() {
  const organizationLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: SITE_URL,
    telephone: "+18327431964",
    email: EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: "701 N Broadway Ave",
      addressLocality: "Oklahoma City",
      addressRegion: "OK",
      postalCode: "73102",
      addressCountry: "US",
    },
    description:
      "Turnkey 1031 exchange guidance, professional introductions and replacement property solutions for Oklahoma City investment property owners.",
  };

  return (
    <div className="overflow-x-hidden font-body">
      <Script id="jsonld-org" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationLd)}
      </Script>

      <section className="relative min-h-[720px] overflow-hidden md:h-screen md:min-h-[720px]">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster="/oklahoma-city-hero.jpg"
        >
          <source src="/lame bum fuck ofc .mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay absolute inset-0" />

        <div className="relative z-10 mx-auto flex min-h-[720px] max-w-6xl flex-col items-center justify-center px-6 pb-16 pt-28 text-center text-white md:h-full md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-5xl"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-white/80 md:text-sm">
              Free exchange guidance for Oklahoma property owners
            </p>
            <h1 className="mt-5 font-heading text-5xl leading-[0.96] tracking-wide sm:text-6xl md:text-7xl lg:text-8xl">
              Turnkey 1031 Exchange Solutions
              <span className="block">in Oklahoma City, OK</span>
            </h1>
            <p className="mx-auto mt-7 max-w-3xl text-base leading-relaxed text-white/90 md:text-xl">
              Selling investment or inherited property? Get help organizing the exchange timeline, independent qualified intermediary, replacement property search and passive DST options.
            </p>

            <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={PHONE_HREF}
                className="btn-white min-w-[230px]"
              >
                Call {PHONE_NUMBER}
              </a>
              <Link
                href="/contact?request=properties"
                className="btn-outline-light min-w-[230px]"
              >
                Get a Free Property List
              </Link>
            </div>

            <div className="mx-auto mt-9 grid max-w-3xl gap-3 border-y border-white/25 py-5 text-left text-sm text-white/85 sm:grid-cols-3 sm:text-center">
              <p>One call to organize the exchange</p>
              <p>Direct and passive property options</p>
              <p>Help before or after going under contract</p>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:px-8 lg:grid-cols-2 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/oklahoma-city-hero.jpg"
              alt="Oklahoma City investment property skyline"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              A different kind of next property
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
              Sell the Property Without Starting Another Management Job
            </h2>
            <p className="mt-6 text-base leading-relaxed text-gray-600">
              Years of tenants, toilets, trash, repairs and vacancies can change what an owner wants from real estate. A 1031 exchange does not have to mean buying another property with the same workload.
            </p>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              Compare another direct acquisition, a net-lease property and professionally managed DST interests against the same goals for income, control, diversification and time. Current DST offerings may provide access to institutional-quality real estate without personal property management, with some minimums beginning around $100,000.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?request=properties" className="btn-primary">
                See No-Management Options
              </Link>
              <a href={PHONE_HREF} className="btn-outline">
                Talk to an Exchange Expert
              </a>
            </div>
            <p className="mt-5 text-xs leading-relaxed text-gray-500">
              DST interests are private securities. Availability, projected income, fees, leverage, liquidity, investor eligibility and suitability vary by offering and require review through appropriately licensed professionals.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Start with the situation
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
              Whatever Stage the Sale Is In, Start Here
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              The right next step depends on what is being sold, when it may close and what the owner wants life after the sale to look like.
            </p>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:gap-px md:overflow-hidden md:border md:border-gray-200 md:bg-gray-200 md:p-0 lg:grid-cols-3">
            {situations.map((situation) => (
              <Link
                key={situation.title}
                href={situation.href}
                className="group min-w-[84%] snap-start border border-gray-200 bg-white p-7 transition-colors hover:bg-gray-900 md:min-w-0 md:border-0 md:p-8"
              >
                <h3 className="font-heading text-2xl uppercase text-gray-900 transition-colors group-hover:text-white">
                  {situation.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/75">
                  {situation.text}
                </p>
                <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 transition-colors group-hover:text-white">
                  Learn what to do next →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                One plan from sale to replacement
              </p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
                Oklahoma City 1031 Exchange Solutions
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65">
                Get help bringing the transaction, required professionals and replacement-property decisions together without having to figure out every handoff alone.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={PHONE_HREF} className="btn-white">
                Call {PHONE_NUMBER}
              </a>
              <Link href="/contact" className="btn-outline-light">
                Get Free Guidance
              </Link>
            </div>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 md:mx-0 md:grid md:grid-cols-2 md:overflow-visible md:p-0 lg:grid-cols-3">
            {solutions.map((solution) => (
              <Link key={solution.title} href={solution.href} className="group block min-w-[84%] snap-start md:min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                  <Image
                    src={solution.image}
                    alt=""
                    fill
                    className="object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-85"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <h3 className="absolute bottom-5 left-5 right-5 font-heading text-2xl uppercase text-white">
                    {solution.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {solution.text}
                </p>
                <span className="mt-4 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-white">
                  Explore this solution →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-24 md:py-36">
        <Image
          src="/locations/tulsa-ok-1031-exchange.jpg"
          alt="Oklahoma commercial real estate"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative z-10 mx-auto max-w-7xl px-6 text-white md:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/65">
              Passive replacement property
            </p>
            <h2 className="mt-4 font-heading text-5xl uppercase leading-none md:text-7xl">
              Move Beyond Tenants, Toilets and Trash
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-white/85">
              A DST can give eligible investors fractional access to professionally managed real estate while the sponsor handles leasing, maintenance and property operations. That can make it useful for owners who want real estate exposure and projected income without another hands-on landlord role.
            </p>
            <ul className="mt-7 grid gap-3 text-sm text-white/85 sm:grid-cols-2">
              <li className="border-l border-white/40 pl-4">No day-to-day property management</li>
              <li className="border-l border-white/40 pl-4">Institutional-quality real estate</li>
              <li className="border-l border-white/40 pl-4">Potential diversification across assets</li>
              <li className="border-l border-white/40 pl-4">Some offering minimums near $100,000</li>
            </ul>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact?request=properties" className="btn-white">
                Get the Current DST List
              </Link>
              <a href={PHONE_HREF} className="btn-outline-light">
                Free Consultation: {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
                A clear path through the exchange
              </p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
                Tell Us What You Are Selling and What You Want Next
              </h2>
              <p className="mt-6 text-base leading-relaxed text-gray-600">
                A first conversation can begin with a property address, expected sale date and the reason for selling. From there, the exchange can be organized around the facts rather than a generic checklist.
              </p>
              <a href={PHONE_HREF} className="btn-primary mt-8">
                First Exchange? Call {PHONE_NUMBER}
              </a>
            </div>

            <div className="divide-y divide-gray-200 border-y border-gray-200">
              {[
                ["Clarify the sale", "Review ownership, use, expected timing, debt, equity and the professionals already involved."],
                ["Define the next investment", "Write down income needs, control, management capacity, financing and the ownership paths worth comparing."],
                ["Connect the exchange team", "Bring in the independent qualified intermediary and the tax, legal, brokerage or lending professionals the facts require."],
                ["Compare primary and backup properties", "Evaluate direct real estate, net-lease opportunities and DST interests for risk, workload, financing and ability to close."],
                ["Keep the closing path visible", "Track open questions, diligence, title, funding directions and advisor handoffs through replacement closing."],
              ].map(([title, text]) => (
                <div key={title} className="py-6 md:grid md:grid-cols-[220px_1fr] md:gap-8">
                  <h3 className="font-heading text-2xl uppercase text-gray-900">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600 md:mt-0">{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              One sale objective, different ownership paths
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
              Compare the Property, Workload and Control Together
            </h2>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 lg:mx-0 lg:grid lg:grid-cols-3 lg:gap-px lg:overflow-hidden lg:border lg:border-gray-200 lg:bg-gray-200 lg:p-0">
            {ownershipPaths.map((path) => (
              <Link key={path.title} href={path.href} className="group min-w-[84%] snap-start border border-gray-200 bg-white p-8 transition-colors hover:bg-gray-900 md:p-10 lg:min-w-0 lg:border-0">
                <h3 className="font-heading text-3xl uppercase text-gray-900 transition-colors group-hover:text-white">
                  {path.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-gray-600 transition-colors group-hover:text-white/70">
                  {path.text}
                </p>
                <span className="mt-7 inline-block text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 transition-colors group-hover:text-white">
                  Compare this path →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
                Local conversations, nationwide property options
              </p>
              <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
                Oklahoma City Area 1031 Exchange Help
              </h2>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Link href="/service-areas" className="btn-outline-light">
                View All Markets
              </Link>
              <Link href="/contact?request=properties" className="btn-white">
                Get a Free Property List
              </Link>
            </div>
          </div>

          <div className="-mx-6 mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:p-0 lg:grid-cols-3">
            {locationsData.slice(0, 6).map((location) => (
              <Link key={location.slug} href={location.route} className="group block min-w-[84%] snap-start sm:min-w-0">
                <div className="relative aspect-[4/3] overflow-hidden bg-gray-800">
                  <Image
                    src={location.heroImage || "/locations/oklahoma-city-ok-1031-exchange.jpg"}
                    alt={`${location.name} 1031 exchange help`}
                    fill
                    className="object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-90"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <h3 className="absolute bottom-5 left-5 font-heading text-2xl uppercase text-white">
                    {location.name}
                  </h3>
                </div>
                <p className="mt-3 text-sm text-white/55">
                  Sale planning, exchange guidance and replacement property options for {location.name} owners.
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Useful information before the clock starts
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
              Free Oklahoma City 1031 Exchange Resources
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
            {guides.map((guide) => (
              <Link
                key={guide.title}
                href={guide.href}
                className="group grid gap-4 py-7 transition-colors md:grid-cols-[1fr_1.2fr_auto] md:items-center md:gap-8"
              >
                <h3 className="font-heading text-2xl uppercase text-gray-900">{guide.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{guide.text}</p>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-900 group-hover:underline">
                  {guide.label} →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-6 md:px-8">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-gray-500">
              Common questions from property owners
            </p>
            <h2 className="mt-4 font-heading text-4xl uppercase leading-none md:text-6xl">
              Oklahoma City 1031 Exchange Questions
            </h2>
          </div>

          <div className="mt-12 divide-y divide-gray-300 border-y border-gray-300">
            {faqs.map((faq) => (
              <details key={faq.question} className="group py-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-6 font-heading text-2xl uppercase text-gray-900">
                  {faq.question}
                  <span className="text-2xl font-light transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-4 max-w-3xl pr-10 text-sm leading-relaxed text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section-dark py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 md:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-white/55">
              Free exchange guidance
            </p>
            <h2 className="mt-4 font-heading text-5xl uppercase leading-none md:text-7xl">
              One Call Can Organize the Next Step
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/70">
              Share what is being sold, the expected closing date and what the next investment needs to accomplish. The conversation is free, whether the exchange is still being considered or the property is already under contract.
            </p>
            <a href={PHONE_HREF} className="btn-white mt-8">
              Call {PHONE_NUMBER}
            </a>
            <p className="mt-6 text-xs leading-relaxed text-white/45">
              Educational guidance and professional introductions only. Tax, legal, qualified-intermediary, brokerage, lending and securities work is handled by the appropriate independent professionals.
            </p>
          </div>

          <div>
            <h3 className="mb-5 font-heading text-3xl uppercase text-white">
              Contact Us Now for Free Exchange Guidance
            </h3>
            <ContactFormWrapper />
          </div>
        </div>
      </section>
    </div>
  );
}
